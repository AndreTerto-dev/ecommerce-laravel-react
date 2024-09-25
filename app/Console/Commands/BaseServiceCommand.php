<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

class BaseServiceCommand extends Command
{
    protected $signature = 'make:service {name}';
    protected $description = 'Create a new service class';
    protected $files;

    public function __construct(Filesystem $files)
    {
        parent::__construct();
        $this->files = $files;
    }

    public function handle()
    {
        $name = $this->argument('name');
        $this->createService($name);
    }

    protected function createService($name)
    {
        $serviceClass = $name . 'Service';
        $namespace = 'App\\Services\\' . $name;
        $model = $name;
        $modelVariable = Str::camel($name);

        $template = <<<EOT
<?php

namespace $namespace;

use App\Exceptions\\$name\\{$name}NotFoundException;
use App\Models\\$model;
use Illuminate\Http\Response;

class {$serviceClass}
{
    public function __construct(
        protected $model \$$modelVariable
    ) {}

    public function index()
    {
        return \$this->{$modelVariable}->paginate(10);
    }

    public function all()
    {
        return \$this->{$modelVariable}->withTrashed()->get();
    }

    public function getById(int \$id)
    {
        \$$modelVariable = \$this->{$modelVariable}->find(\$id);

        if (!\$$modelVariable) {
            throw new {$name}NotFoundException(__('messages.not-found', ['model' => modelName('$name')]), Response::HTTP_NOT_FOUND);
        }

        return \$$modelVariable;
    }

    public function create(array \$data)
    {
        
    }

    public function update(int \$id, array \$data)
    {
        
    }

    public function destroy(int \$id)
    {
        
    }

    public function restore(int \$id)
    {
        
    }

    public function forceDelete(int \$id)
    {
        
    }
}
EOT;

        $path = app_path("Services/{$name}/{$serviceClass}.php");

        if (!$this->files->isDirectory(dirname($path))) {
            $this->files->makeDirectory(dirname($path), 0755, true);
        }

        if ($this->files->exists($path)) {
            $this->error("{$serviceClass} already exists!");
            return;
        }

        $this->files->put($path, $template);
        $this->info("{$serviceClass} created successfully.");
    }
}
