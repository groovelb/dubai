import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ChecklistItem } from './ChecklistItem';

/**
 * IngredientChecklist 컴포넌트
 *
 * 카테고리별로 그룹핑된 재료 체크리스트입니다.
 * 내부에서 체크 상태를 관리합니다.
 *
 * Props:
 * @param {Array} ingredients - recipeData.ingredients 배열 [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <IngredientChecklist ingredients={recipeData.ingredients} />
 */
function IngredientChecklist({ ingredients, sx }) {
  const [checkedIds, setCheckedIds] = useState(new Set());

  const handleToggle = (id) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  /** 카테고리별 그룹핑 */
  const grouped = ingredients.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  /** 카테고리 순서 유지 */
  const categoryOrder = ['속재료', '겉재료', '마무리'];
  const sortedCategories = categoryOrder.filter((cat) => grouped[cat]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
      {sortedCategories.map((category) => (
        <Box key={category}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              color: 'custom.caramel',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {category}
          </Typography>
          <Box>
            {grouped[category].map((item) => (
              <ChecklistItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                unit={item.unit}
                note={item.note}
                isChecked={checkedIds.has(item.id)}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export { IngredientChecklist };
