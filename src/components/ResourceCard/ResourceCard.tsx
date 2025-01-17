import { Resource } from "../../types";
import { Card } from "../Card/Card";
import { Tags } from "../Tags/Tags";
import styles from "./ResourceCard.module.scss";

export type CardProps = {
  resource: Resource;
};

export function ResourceCard(props: CardProps) {
  const { resource } = props;
  const { title, url, tags, blurb } = resource;

  if (!title || !url) {
    return null;
  }

  return (
    <Card>
      <h3 className={styles.heading}>
        <a target="_blank" rel="noreferrer" href={url} title={title}>
          {title}
        </a>
      </h3>
      <Tags tags={tags} className={styles.tags} />
      {blurb ? <p className={styles.blurb}>{blurb}</p> : null}
    </Card>
  );
}
