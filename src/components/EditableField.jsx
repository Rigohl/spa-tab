import React, { useState } from 'react';

const EditableField = ({ value, onChange, placeholder = '', type = 'text' }) => {
  const [editing, setEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleBlur = () => {
    setEditing(false);
    if (tempValue !== value) {
      onChange(tempValue);
    }
  };

  return (
    <div
      style={{ cursor: 'pointer', marginBottom: '6px' }}
      onClick={() => setEditing(true)}
    >
      {editing ? (
        <input
          type={type}
          value={tempValue}
          onChange={e => setTempValue(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          style={{
            width: '100%',
            padding: '6px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
      ) : (
        <span style={{ display: 'block', fontSize: '14px', color: value ? '#000' : '#888' }}>
          {value || placeholder || 'Haz clic para editar'}
        </span>
      )}
    </div>
  );
};

export default EditableField;