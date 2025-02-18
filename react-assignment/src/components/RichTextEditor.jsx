import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = () => {
  const [content, setContent] = useState('');
  const editorRef = useRef(null);

  // Load content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

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
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'emoticons',
            'textcolor',
            'directionality',
            'fullscreen',
            'code',
          ],
          toolbar:
            'undo redo | formatselect | bold italic underline strikethrough | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | emoticons | ' +
            'forecolor backcolor | ltr rtl | fullscreen | code | help',
          content_style:
            'body { font-family:Arial,Helvetica,sans-serif; font-size:14px; padding: 10px; }',
          setup: (editor) => {
            editor.ui.registry.addButton('emoticons', {
              text: '😊',
              tooltip: 'Insert emoticon',
              onAction: () => {
                editor.insertContent('😊');
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
