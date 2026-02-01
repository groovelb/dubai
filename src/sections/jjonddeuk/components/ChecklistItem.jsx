import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

/**
 * ChecklistItem 컴포넌트
 *
 * 재료 체크리스트의 개별 아이템입니다.
 * 체크 시 취소선과 연한 색상이 적용됩니다.
 *
 * Props:
 * @param {string} name - 재료 이름 [Required]
 * @param {number|null} amount - 분량 [Optional]
 * @param {string} unit - 단위 [Required]
 * @param {string|null} note - 추가 메모 [Optional]
 * @param {boolean} isChecked - 체크 상태 [Optional, 기본값: false]
 * @param {function} onToggle - 체크 토글 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ChecklistItem name="카다이프면" amount={100} unit="g" note="130g까지 가능" />
 */
function ChecklistItem({
  name,
  amount,
  unit,
  note,
  isChecked = false,
  onToggle,
  sx,
}) {
  const checkedStyle = isChecked ? {
    textDecoration: 'line-through',
    opacity: 0.5,
  } : {};

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        py: 0.75,
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'opacity 0.2s ease',
        ...sx,
      }}
    >
      <Checkbox
        checked={isChecked}
        onChange={onToggle}
        size="small"
        sx={{ p: 0.5 }}
      />
      <Typography
        variant="body1"
        sx={{
          flex: 1,
          fontWeight: 500,
          ...checkedStyle,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          minWidth: 60,
          textAlign: 'right',
          ...checkedStyle,
        }}
      >
        {amount !== null ? `${amount}${unit}` : unit}
      </Typography>
      {note && (
        <Typography
          variant="caption"
          sx={{
            color: 'custom.caramel',
            minWidth: 80,
            ...checkedStyle,
          }}
        >
          {note}
        </Typography>
      )}
    </Box>
  );
}

export { ChecklistItem };
