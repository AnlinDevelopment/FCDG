

const Tile = ({ tile, onDelete, onToggle }) => {
  return (
    <div
      className={`tile ${tile.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(tile.id)}
    >
      <h3>
        {tile.text}{' '}
        <a
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(tile.id)}
        />
      </h3>
      <p>{tile.day}</p>
    </div>
  )
}

export default Tile