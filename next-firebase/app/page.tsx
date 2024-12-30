import { db } from "./firebase.js";
import { collection, getDocs } from "firebase/firestore";

const fetchAllDocuments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

fetchAllDocuments();

export default function Home() {
  return <div>Fetching all products...</div>;
}
