import { Card } from "@mui/material";
import styles from './cards.module.css'

const Cards = ({ content }) => {
  return <Card className={styles.container}>{content}</Card>;
};

export default Cards;
