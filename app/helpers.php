<?php

if (!function_exists('modelName')) {
    function modelName($model)
    {
        return class_basename($model);
    }
}
