import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
// Định nghĩa kiểu dữ liệu tin nhắn
interface Message {
  id: string;
  name: string;
  text: string;
}

export default function MessageForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(
        (doc: QueryDocumentSnapshot<DocumentData>) => {
          const docData = doc.data();
          return {
            id: doc.id,
            name: docData.name,
            text: docData.text,
          } as Message;
        }
      );
      setMessages(data);
    });
    return unsubscribe;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && text) {
      await addDoc(collection(db, "messages"), {
        name,
        text,
        createdAt: serverTimestamp(),
      });
      setText("");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          placeholder="Tên bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Tin nhắn..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Gửi
        </button>
      </form>
      <div>
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2 border-b pb-2">
            <strong>{msg.name}</strong>: {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}
