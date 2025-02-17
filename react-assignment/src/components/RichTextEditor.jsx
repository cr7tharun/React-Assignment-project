import React, { useState, useRef } from 'react';
import { Container, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = () => {
  const [content, setContent] = useState(localStorage.getItem('editorContent') || '');
  const editorRef = useRef(null);

  const handleEditorChange = (newValue) => {
    setContent(newValue);
    localStorage.setItem('editorContent', newValue);
  };

  return (
    <Container sx={{ padding: 4, maxWidth: '800px', marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Rich Text Editor
      </Typography>
      <Editor
        apiKey="your-api-key" // Replace with your TinyMCE API key
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | customInsertButton | help',
          content_style: 'body { font-family:Arial,Helvetica,sans-serif; font-size:14px; padding: 10px; }',
          setup: (editor) => {
            editor.ui.registry.addButton('customInsertButton', {
              text: 'Insert Template',
              tooltip: 'Insert predefined template',
              onAction: () => {
                editor.insertContent('<p><strong>Template Content:</strong> Replace this with your text.</p>');
              },
            });
          },
        }}
        onEditorChange={handleEditorChange}
      />
    </Container>
  );
};

export default RichTextEditor;
