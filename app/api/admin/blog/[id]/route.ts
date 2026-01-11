import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const {
      title,
      slug,
      content,
      excerpt,
      featured_image,
      author,
      published
    } = body

    // If only updating published status
    if (Object.keys(body).length === 1 && 'published' in body) {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          published,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json(
          { error: 'Failed to update blog post' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        message: 'Blog post updated successfully',
        post: data[0]
      })
    }

    // Full update
    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        title,
        slug,
        content,
        excerpt,
        featured_image,
        author,
        published,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to update blog post' },
        { status: 500 }
      )
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: 'Blog post updated successfully',
      post: data[0]
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to delete blog post' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      message: 'Blog post deleted successfully'
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}