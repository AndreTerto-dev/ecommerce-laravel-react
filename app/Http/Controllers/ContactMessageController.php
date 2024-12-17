<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMessage\ContactMessageRequest;
use App\Models\ContactMessage;
use Illuminate\Http\Request;

class ContactMessageController extends Controller
{

    public function __construct(protected ContactMessage $contactMessage) {}

    public function show()
    {
        return inertia('Informacoes/Contato', [
            'success' => session('success'), // Certifique-se de que a mensagem está na sessão
        ]);
    }

    public function store(ContactMessageRequest $request)
    {
        $data = $request->validated();
        $this->contactMessage->create($data);

        return to_route('contact.show')
        ->with('success', 'Mensagem enviada com sucesso');
    }
}
