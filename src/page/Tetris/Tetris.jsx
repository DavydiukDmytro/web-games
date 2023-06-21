import {
  ContainerGame,
  WraperControls,
  WraperStatistics,
} from './Tetris.styled';

const Tetris = () => {
  return (
    <>
      <ContainerGame>{/* playing field */}playing field</ContainerGame>
      <WraperStatistics>
        {/* game statistics */}game statistics
      </WraperStatistics>
      <WraperControls>{/* control buttons */}control buttons</WraperControls>
    </>
  );
};

export default Tetris;
