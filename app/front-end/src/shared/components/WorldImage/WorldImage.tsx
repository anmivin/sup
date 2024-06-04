import { useCallback, useEffect, useRef } from 'react';

import { Box, styled } from '@mui/material';

import { GameParts } from '@constants/enums';

import { AnimatedBox, Container, StyledBox } from './WorldImage.styled';

import { WorldImageProps } from './WorldImage.types';

const WorldImage = <T extends GameParts>({ image }: WorldImageProps<T>) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const startAnimation = useCallback(() => {
    const children = containerRef.current?.children;
    if (children) {
      for (const item of children) {
        const typedItem = item as HTMLDivElement;
        typedItem.style.animationPlayState = 'running';
      }
    }
  }, []);

  const endAnimation = useCallback(() => {
    const children = containerRef.current?.children;
    if (children) {
      for (const item of children) {
        const typedItem = item as HTMLDivElement;
        typedItem.style.animationPlayState = 'paused';
      }
    }
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    element?.addEventListener('mouseover', startAnimation);
    element?.addEventListener('mouseleave', endAnimation);
    return () => {
      element?.removeEventListener('mouseover', startAnimation);
      element?.removeEventListener('mouseleave', endAnimation);
    };
  }, []);

  if (typeof image === 'string') return <StyledBox img={image} />;

  return (
    <Container ref={containerRef}>
      <AnimatedBox className="fifth" img={image.fifth} />
      <AnimatedBox className="fourth" img={image.fourth} speed={24} />
      <AnimatedBox className="third" img={image.third} speed={18} />
      <AnimatedBox className="second" img={image.second} speed={12} />
      <AnimatedBox className="first" img={image.first} speed={8} />
    </Container>
  );
};

export default WorldImage;
