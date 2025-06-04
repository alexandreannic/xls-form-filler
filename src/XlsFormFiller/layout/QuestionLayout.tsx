import {ReactNode} from 'react'
import {alpha, Box, Collapse, styled, useTheme} from '@mui/material'
import ReactMarkdown from 'react-markdown'

const Root = styled(Box, {
  shouldForwardProp: _ => _ !== 'error'
})<{error?: boolean}>(({theme, error}) => ({
  background: error ? alpha(theme.palette.error.light, .15) : theme.palette.background.paper,
  // border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius + 'px',
  // border: error ? `2px solid ${theme.palette.error.main}` : undefined,
  borderLeft: error ? `2px solid ${theme.palette.error.main}` : undefined,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(.5),
  // py: 1,
  // px: 2,
  // mb: .5,
  '&:not(:first-of-type)': {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  '&:not(:last-of-type)': {
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
  }
}))

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
      <Root error={!!error}>
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
      </Root>
    </Collapse>
  )
}