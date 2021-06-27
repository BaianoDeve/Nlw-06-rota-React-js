import { useParams, useHistory } from 'react-router-dom';

import { deleteImg, checkImg, answerImg } from '../../assets';
import {
  Header,
  Button,
  ButtonIcon,
  RoomCode,
  Question,
} from '../../components';

// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightedQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <div id="page-room">
      <Header>
        <RoomCode code={roomId} />
        <Button isOutlined onClick={handleEndRoom}>
          Encerrar Sala
        </Button>
      </Header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} Pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <ButtonIcon
                      type="button"
                      iconImg={checkImg}
                      iconTitle="Marcar pergunta como respodida"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    />
                    <ButtonIcon
                      type="button"
                      iconImg={answerImg}
                      iconTitle="Destacar a pergunta"
                      onClick={() => handleHighlightedQuestion(question.id)}
                    />
                  </>
                )}
                <ButtonIcon
                  type="button"
                  iconImg={deleteImg}
                  iconTitle="Delete Question"
                  onClick={() => handleDeleteQuestion(question.id)}
                />
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}
