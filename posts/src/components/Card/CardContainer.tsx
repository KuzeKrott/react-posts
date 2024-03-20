import Card from "@mui/material/Card";
import { Post } from "@/app/posts/page";
import styles from "./CardContainer.module.scss";
import { Avatar, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { randomInt } from "crypto";

const getRandomColor = () => {
    const color = ["#540d6e", "#ee4266", "#ffd23f", "#3bceac", "#0ead69"];
    return color[randomInt(0, color.length)]
}

const CardContainer = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={styles["card-container"]}>
      {posts.map((post: Post) => {
        return (
          <Card key={post.id} variant="elevation" className={styles.card}>
            <CardHeader
              avatar={<Avatar aria-label="recipe" sx={{backgroundColor: getRandomColor()}}> {post.name && post.name[0]} </Avatar>}
              action={<IconButton aria-label="settings"></IconButton>}
              title={post.title}
              subheader={post.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CardContainer;
