import { React} from 'react'
import Table from './Table'

const TicGame = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Table />
        </div>
      </div>
    );
}

export default TicGame
