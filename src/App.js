import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import depImg from './dep.jpg';


const styles = {
  card: {
    border: '1px solid black',
    boxShadow: '10px 10px 5px grey',
  },
  flexbox: {
    display: 'block',
    heigth: '200px',
  },
  avartar: {
    borderRadius: '50%',
    width: '80px',
    margin: '0px 10px',
    float: 'left',
  },
  content: {
    padding: '5px 10px'
  },
  title: {
    marginBottom: '1px',
  },
  subTitle: {
    marginTop: '1px',
    fontSize: '12px',
  },
  description: {
    padding: '30px',
  },
  pContent: {
    textAlign: 'center',
  },
};

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card}>
            <div className={classes.content}>
              <div className={classes.flexbox}>
                <img className={classes.avartar} src={depImg} alt="..." />
                {/* <h6 className={classes.cardCategory}>{'Nguyễn Trung Kiên'}</h6> */}
                <p className={classes.title}>Nguyễn Trung Kiên</p>
                <p className={classes.subTitle}>1 giờ</p>
              </div>
              <div >

                <div className={classes.description}>
                  <p className={classes.pContent}>
                    Bài thơ đầu tiên anh viết tặng em<br />
                    Là bài thơ anh kể về đôi dép<br />
                    Khi nỗi nhớ trong lòng da diết<br />
                    Những vật tầm thường cũng viết thành thơ</p>
                  <p className={classes.pContent}>
                    Hai chiếc dép kia gặp nhau tự bao giờ<br />
                    Có yêu nhau đâu mà chẳng rời nửa bước<br />
                    Cùng gánh vác những nẻo đường xuôi ngược<br />
                    Lên thảm nhung, xuống cát bụi cùng nhau</p>
                  <p className={classes.pContent}>
                    Cùng bước, cùng mòn, không kẻ thấp người cao<br />
                    Cùng chia sẻ sức người đời chà đạp<br />
                    Dẫu vinh nhục không đi cùng kẻ khác<br />
                    Số phận chiếc này phụ thuộc ở chiếc kia</p>
                  <p className={classes.pContent}>
                    Nếu ngày nào một chiếc dép mất đi<br />
                    Mọi thay thế đều trở thành khập khiễng<br />
                    Giống nhau lắm nhưng đời sẽ biết<br />
                    Hai chiếc này chẳng phải một đôi đâu</p>
                  <p className={classes.pContent}>
                    Cũng như mình trong những lúc vắng nhau<br />
                    Bước hụt hẫng cứ nghiêng về một phía<br />
                    Dẫu bên cạnh đã có người thay thế<br />
                    Mà trong lòng nỗi nhớ cứ chênh vênh</p>
                  <p className={classes.pContent}>
                    Đôi dép vô tri khăng khít song hành<br />
                    Chẳng thề nguyện mà không hề giả dối<br />
                    Chẳng hứa hẹn mà không hề phản bội<br />
                    Lối đi nào cũng có mặt cả đôi</p>
                  <p className={classes.pContent}>
                    Không thể thiếu nhau trên bước đường đời<br />
                    Dẫu mỗi chiếc ở một bên phải trái<br />
                    Nhưng tôi yêu em ở những điều ngược lại<br />
                    Gắn bó nhau vì một lối đi chung</p>
                  <p className={classes.pContent}>
                    Hai mảnh đời thầm lặng bước song song<br />
                    Sẽ dừng lại khi chỉ còn một chiếc<br />
                    Chỉ còn một là không còn gì hết<br />
                    Nếu không tìm được chiếc thứ hai kia ...</p>
                </div>
                <Grid container>
                  <Grid item xs={6}><Button fullWidth variant="contained" color="primary" className={classes.button}>
                    Thích
      </Button></Grid>
                  <Grid item xs={6}><Button fullWidth variant="contained" color="secondary" className={classes.button}>
                    Bình Luận
      </Button></Grid>
                </Grid>


              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
