import {alpha, Button, Icon, IconButton, Input, styled, TextField} from '@mui/material'
import {useMemo, useRef} from 'react'
import {useXlsFormFillerContext} from '../XlsFormFiller.tsx'
import {cssMixins} from '../../theme.ts'
import {formatFileSize} from '../../utils/helpers.ts'

const ImageContainer = styled('div')(({theme}) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  fontWeight: theme.typography.fontWeightBold,
  position: 'relative',
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  maxWidth: '100%',
  maxHeight: 200,
  objectFit: 'contain',
  borderRadius: (theme.shape.borderRadius - 4) + 'px',
  display: 'flex',
  justifyContent: 'center',
}))

const Image = styled('img')(({theme}) => ({
  margin: 'auto',
  height: '100%',
  maxHeight: 200,
}))

const DeleteBtn = styled(IconButton)(({theme}) => ({
  marginRight: theme.spacing(-1),
  marginLeft: theme.spacing(1),
}))

export const QuestionFile = ({
  onClear,
  file,
  onChange,
  type,
}: {
  type?: 'image' | string
  file?: File
  onClear: () => void
  onChange: (_: File) => void
}) => {
  const ctx = useXlsFormFillerContext()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const previewUrl = useMemo(() => {
    if (type !== 'image' || !file) return
    return URL.createObjectURL(file)
  }, [file])

  const handleFile = (file: File) => {
    onChange(file)
  }

  const handleDelete = () => {
    onClear()
    fileInputRef.current!.value = ''
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={type === 'image' ? 'image/*' : ''}
        style={{display: 'none'}}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />

      <TextField
        variant="standard"
        fullWidth
        helperText={file ? formatFileSize(file.size) : ''}
        value={file?.name ?? ''}
        slotProps={{
          input: {
            startAdornment: <Icon color="disabled" sx={{mr: 1}}>{type === 'image' ? 'image' : 'description'}</Icon>,
            endAdornment: file && (
              <DeleteBtn
                aria-label="delete"
                color="primary"
                onClick={(e) => {
                  handleDelete()
                  e.stopPropagation()
                }}
                size="small"
              >
                <Icon fontSize="small">delete</Icon>
              </DeleteBtn>
            )
          }
        }}
        onClick={() => fileInputRef.current?.click()}
        placeholder={type === 'image'
          ? file ? ctx.labels.changeImage : ctx.labels.selectImage
          : file ? ctx.labels.changeFile : ctx.labels.selectFile
        }
      />
      {previewUrl && (
        <ImageContainer>
          <Image
            src={previewUrl}
            alt="Preview"
          />
        </ImageContainer>
      )}
    </>
  )
}
