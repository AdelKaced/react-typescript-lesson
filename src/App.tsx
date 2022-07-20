import { useRef, useState } from 'react';
import Message from './Message';
import { MessagesInt } from './model';

const App = () => {
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState<MessagesInt[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // inputMessage.current.value = ""

    if (inputMessage) {
      const mess: MessagesInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now(),
      };
      console.log(messData);

      setMessData((prevData) => [...prevData, mess]);
      (document.getElementById('inputMessage') as HTMLInputElement).value = '';
    }
  };

  return (
    <div>
      <h2>Poster un Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="inputMessage"
          placeholder="entrez un message"
          ref={inputMessage}
        />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Liste des messages</h2>
      <div>
        {messData?.map((mess) => (
          <Message
            mess={mess}
            messData={messData}
            setMessData={setMessData}
            key={mess.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
