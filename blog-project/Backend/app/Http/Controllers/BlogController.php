<?php
namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
  
    public function index()
    {
        return Blog::all();
    }

 
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);
        return Blog::create($validated);
    }


    public function show(Blog $blog)
    {
        return $blog;
    }

    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);
        $blog->update($validated);
        return $blog;
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return response()->json(['message' => 'Blog deleted']);
    }
}
