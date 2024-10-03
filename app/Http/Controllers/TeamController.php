<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Team\TeamRequest;
use App\Http\Resources\TeamResource;
use App\Models\Team;
use App\Services\Team\TeamService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class TeamController extends Controller
{
    protected TeamService $teamService;

    public function __construct(TeamService $teamService)
    {
        $this->teamService = $teamService;
    }

    public function index()
    {
        $query = request("name") ? ['name' => request("name")] : [];
        $teams = $this->teamService->index($query);

        return inertia("Team/Index", [
            "teams" => TeamResource::collection($teams),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
        ]);
    }

    public function create()
    {
        return inertia("Team/Create");
    }

    public function store(TeamRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            $teamNameSlug = Str::slug($data['name']);
            $data['image_path'] = $image->store('team/' . $teamNameSlug, 'public');
        }

        $this->teamService->create($data);

        return to_route('team.index')
            ->with('success', 'Team was created');
    }

    public function show(int $id)
    {
        $team = $this->teamService->getById($id);

        return inertia('Team/Show', [
            'team' => new TeamResource($team),
            "success" => session('success'),
        ]);
    }

    public function edit(Team $team)
    {
        return inertia('Team/Edit', [
            'team' => new TeamResource($team),
        ]);
    }

    public function update(TeamRequest $request, Team $team)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($team->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($team->image_path));
            }
            $data['image_path'] = $image->store('team/' . Str::random(), 'public');
        }
        $this->teamService->update($team->id, $data);

        return to_route('team.index')
            ->with('success', "Team \"$team->name\" was updated");
    }

    public function destroy(Team $team)
    {
        $name = $team->name;
        $this->teamService->destroy($team->id);
        if ($team->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($team->image_path));
        }
        return to_route('team.index')
            ->with('success', "Team \"$name\" was deleted");
    }
}
