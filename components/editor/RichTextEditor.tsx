'use client'

import { useState, useRef } from 'react'
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Link, 
  Image, 
  Quote,
  Heading1,
  Heading2,
  Heading3
} from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle common keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault()
          execCommand('bold')
          break
        case 'i':
          e.preventDefault()
          execCommand('italic')
          break
        case 'u':
          e.preventDefault()
          execCommand('underline')
          break
      }
    }
  }

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const insertLink = () => {
    if (linkUrl) {
      execCommand('createLink', linkUrl)
      setLinkUrl('')
      setIsLinkModalOpen(false)
    }
  }

  const insertImage = () => {
    const url = prompt('Enter image URL:')
    if (url) {
      execCommand('insertImage', url)
    }
  }

  const toolbarButtons = [
    { icon: Bold, command: 'bold', title: 'Bold (Ctrl+B)' },
    { icon: Italic, command: 'italic', title: 'Italic (Ctrl+I)' },
    { icon: Underline, command: 'underline', title: 'Underline (Ctrl+U)' },
    { icon: Heading1, command: 'formatBlock', value: 'h1', title: 'Heading 1' },
    { icon: Heading2, command: 'formatBlock', value: 'h2', title: 'Heading 2' },
    { icon: Heading3, command: 'formatBlock', value: 'h3', title: 'Heading 3' },
    { icon: List, command: 'insertUnorderedList', title: 'Bullet List' },
    { icon: ListOrdered, command: 'insertOrderedList', title: 'Numbered List' },
    { icon: Quote, command: 'formatBlock', value: 'blockquote', title: 'Quote' },
  ]

  return (
    <div className="border border-neutral-300 rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-neutral-50 border-b border-neutral-300 p-2 flex flex-wrap gap-1">
        {toolbarButtons.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={() => execCommand(button.command, button.value)}
            className="p-2 hover:bg-neutral-200 rounded transition-colors"
            title={button.title}
          >
            <button.icon className="h-4 w-4" />
          </button>
        ))}
        
        <div className="border-l border-neutral-300 mx-1" />
        
        <button
          type="button"
          onClick={() => setIsLinkModalOpen(true)}
          className="p-2 hover:bg-neutral-200 rounded transition-colors"
          title="Insert Link"
        >
          <Link className="h-4 w-4" />
        </button>
        
        <button
          type="button"
          onClick={insertImage}
          className="p-2 hover:bg-neutral-200 rounded transition-colors"
          title="Insert Image"
        >
          <Image className="h-4 w-4" />
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className="min-h-[300px] p-4 focus:outline-none prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: value }}
        style={{ whiteSpace: 'pre-wrap' }}
      />

      {/* Link Modal */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Insert Link</h3>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="Enter URL..."
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg mb-4"
              autoFocus
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsLinkModalOpen(false)}
                className="px-4 py-2 text-neutral-600 hover:text-neutral-800"
              >
                Cancel
              </button>
              <button
                onClick={insertLink}
                className="btn-primary"
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}