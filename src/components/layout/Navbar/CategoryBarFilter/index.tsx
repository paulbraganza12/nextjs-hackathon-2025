'use client';

import { Container } from '@/components/common';
import IconButton from '@/components/ui/icon-button';
import VerticalScrollContainer from '@/components/ui/vertical-scroll-container';
import useIsMobile from '@/hooks/use-is-mobile.hook';
import { useCallback, useMemo, useState } from 'react';

const categories = [
  { label: 'Cabins', icon: 'cabins' },
  { label: 'OMG!', icon: 'omg' },
  { label: 'Amazing views!', icon: 'amazing-view' },
  { label: 'Vineyard', icon: 'vineyard' },
  { label: 'Camping', icon: 'camping' },
  { label: 'Beachfront', icon: 'beach-front' },
  { label: 'Mansions', icon: 'mansion' },
  { label: 'Off grid', icon: 'off-grid' },
  { label: 'Castles', icon: 'castle' },
  { label: 'Tree house', icon: 'tree-house' },
  { label: "Sheperd's huts", icon: 'sheperds-hut' },
  { label: 'Ski in/out', icon: 'ski-in-out' },
  { label: 'Boats', icon: 'boats' },
  { label: 'Lakefront', icon: 'lake-front' },
  { label: 'Countryside', icon: 'country-side' },
  { label: 'Adapted', icon: 'adapted' },
  { label: 'A frames', icon: 'a-frame' },
  { label: 'Windmills', icon: 'windmills' },
  { label: 'Bread & breakfast', icon: 'bnb' },
  { label: "Chef's kitchen", icon: 'chefs-kitchen' },
  { label: 'Containers', icon: 'containers' },
  { label: 'Creative spaces', icon: 'creative-spaces' },
  { label: 'Cycladic homes', icon: 'cycladic-homes' },
  { label: 'Golfing', icon: 'golfing' },
  { label: 'Grand pianos', icon: 'grand-pianos' },
  { label: 'New', icon: 'new' },
  { label: 'Raids', icon: 'raids' },
];

interface CategoryBarFilterProps {
  onCategorySelected: (category: string) => void;
}
export const CategoryBarFilter = ({ onCategorySelected }: CategoryBarFilterProps) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].icon);
  const isMobile = useIsMobile();

  const memoizedCategories = useMemo(() => categories, []);

  const handleCategoryClick = useCallback((icon: string) => {
    setActiveCategory(icon);
    onCategorySelected?.(icon);
  }, [onCategorySelected]);

  return (
    <div className="sticky top-[80px] z-50 bg-white border-b border-gray-200">
      {isMobile ? (
        <div className="no-scrollbar flex items-center gap-x-4 overflow-x-auto px-2 py-2 whitespace-nowrap shadow-sm">
          {memoizedCategories.map((category) => (
            <IconButton
              key={category.label}
              label={category.label}
              icon={category.icon}
              active={activeCategory === category.icon}
              onClick={() => handleCategoryClick(category.icon)}
            />
          ))}
        </div>
      ) : (
        <Container>
          <VerticalScrollContainer>
            <div className="flex items-center gap-x-4 px-1 py-5 md:gap-x-8">
              {memoizedCategories.map((category) => (
                <IconButton
                  key={category.label}
                  label={category.label}
                  icon={category.icon}
                  active={activeCategory === category.icon}
                  onClick={() => handleCategoryClick(category.icon)}
                />
              ))}
            </div>
          </VerticalScrollContainer>
        </Container>
      )}
    </div>
  );
};
