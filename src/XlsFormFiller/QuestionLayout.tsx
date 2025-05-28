import {ReactNode} from 'react'
import {alpha, Box, Collapse, useTheme} from '@mui/material'
import ReactMarkdown from 'react-markdown'

export type QuestionLayoutProps = {
  label: string
  hint?: string
  error?: string
  children?: ReactNode
  visible?: boolean
}

export const QuestionLayout = ({
  label,
  hint,
  children,
  visible,
  error,
}: QuestionLayoutProps) => {
  const t = useTheme()
  return (
    <Collapse in={visible} unmountOnExit>
      <Box sx={{
        // background: error ? alpha(t.palette.error.light, .15) : t.palette.background.paper,
        border: `1px solid ${t.palette.divider}`,
        borderRadius: t.shape.borderRadius + 'px',
        // border: error ? `2px solid ${t.palette.error.main}` : undefined,
        borderLeft: error ? `2px solid ${t.palette.error.main}` : undefined,
        py: 1,
        px: 2,
        mb: .5,
        '&:not(:first-of-type)': {
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        },
        '&:not(:last-of-type)': {
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
        }
      }}>
        <Box sx={{mb: children ? 1 : 0}}>
          <Box sx={{fontWeight: t.typography.fontWeightBold}}>
            <ReactMarkdown components={{p: ({children}) => <>{children}</>}}>
              {label}
            </ReactMarkdown>
          </Box>
          {hint && (
            <Box sx={{color: t.palette.text.secondary}}>
              <ReactMarkdown components={{p: ({children}) => <>{children}</>}}>
                {hint}
              </ReactMarkdown>
            </Box>
          )}
        </Box>
        {children}
        <Box sx={{color: t.palette.error.main}}>{error}</Box>
      </Box>
    </Collapse>
  )
}