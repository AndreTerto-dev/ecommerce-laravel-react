<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerEmail\CustomerEmailRequest;
use App\Models\CustomerEmail;
use Illuminate\Database\QueryException;

class CustomerEmailController extends Controller
{
    public function __construct(protected CustomerEmail $customerEmail) {}

    public function store(CustomerEmailRequest $request)
    {
        $data = $request->validated();

        try {
            $this->customerEmail->create($data);
        } catch (QueryException $e) {
            // Verifica se o código da exceção é para violação de unicidade
            if ($e->getCode() === '23505') { // PostgreSQL: Código de violação de unicidade
                return back()->with('success', 'Email salvo com sucesso');
            }

            // Re-lança a exceção caso seja outro erro
            throw $e;
        }

        return back()->with('success', 'Email salvo com sucesso');
    }
}
