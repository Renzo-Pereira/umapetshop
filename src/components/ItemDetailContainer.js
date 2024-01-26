import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../firebase/config"
import { getDoc,doc } from "firebase/firestore"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
          .then((resp) => {
            setItem(
              { ...resp.data(), id: resp.id }
            );
          })
  
      }, [id])

    return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
)
}


export default ItemDetailContainer