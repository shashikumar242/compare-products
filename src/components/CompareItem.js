import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  marginLeft: "15px",
  marginRight: "15px",
  marginTop: "15px",
  marginBottom: "15px",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function CompareItem({ product }) {
  const classes = useStyles();
  return (
    <div style={styles}>
      <Card className={classes.root}>
        <CardActionArea>
          <img
            height="300px"
            width="150px"
            src={product.imgsrc}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
           Name:{product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Cost:{product.cost}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              rating:{product.rating}
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="p">
              Brand:{product.brand}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Color:{product.color}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              RAM:{product.RAM}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ROM:{product.ROM}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Expandable:{product.Expandable}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Display:{product.Display}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Camera:{product.Camera}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Battery:{product.Battery}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Processor:{product.Processor}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
