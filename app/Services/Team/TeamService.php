<?php

namespace App\Services\Team;

use App\Exceptions\Team\TeamAlreadyExistsException;
use App\Exceptions\Team\TeamNotFoundException;
use App\Models\Team;
use Illuminate\Http\Response;

class TeamService
{
    public function __construct(protected Team $team) {}

    public function index(array $filters = [])
    {
        $query = $this->team->query();

        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");

        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        return $team = $query->orderBy($sortFields, $sortDirection)->paginate(5);
    }

    public function create(array $data)
    {
        if ($this->findExistingTeamByName($data['name'])) {
            throw new TeamAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Team')]), Response::HTTP_CONFLICT);
        }

        return $this->team->create($data);
    }

    public function getById(int $id)
    {
        $team = $this->team->find($id);

        if (!$team) {
            throw new TeamNotFoundException(__('messages.not-found', ['model' => modelName('Team')]), Response::HTTP_NOT_FOUND);
        }

        return $team;
    }

    public function update(int $id, array $data)
    {
        $team = $this->getById($id);

        $existingTeam = $this->findExistingTeamByName($data['name']);

        if ($existingTeam && $existingTeam->id !== $id) {
            throw new TeamAlreadyExistsException(
                __('messages.already-exists', ['model' => modelName('Team')]),
                Response::HTTP_CONFLICT
            );
        }

        $team->update($data);

        return $team;
    }

    public function destroy(int $id)
    {
        $team = $this->getById($id);

        $team->delete();

        return $id;
    }

    private function findExistingTeamByName(string $name)
    {
        return $this->team->where('name', $name)->first();
    }
}
