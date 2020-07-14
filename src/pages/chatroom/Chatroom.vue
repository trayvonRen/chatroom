<template>
  <div class="chatroom-wrapper">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-tag type="warning">在线成员</el-tag>
          <el-card v-for="item in userlist" :key="item" class="member" shadow="hover">{{item}}</el-card>
        </el-aside>
        <el-container>
          <el-main>
            <el-tag type="warning">聊天记录</el-tag>
            <el-card class="content-box" v-for="item in chatHistory" :key="item" shadow="hover">
              <el-tag>{{item.name}}</el-tag>
              {{item.message}}
            </el-card>
          </el-main>
          <el-footer>
            <el-input v-model="form.message" placeholder="请输入内容"></el-input>
            <el-button class="submit" v-on:click="submit" type="primary">发送</el-button>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        message: ""
      }
    };
  },
  methods: {
    submit() {
      if (this.form.message === "") {
        this.$notify.error({
          title: "error",
          message: "内容不能为空"
        });
        return;
      }
      this.ws.send(
        JSON.stringify({
          type: "message",
          data: this.form.message
        })
      );
      this.form.message = "";
    }
  },
  computed: mapState(["userlist", "ws", "chatHistory"])
};
</script>

<style scoped lang="scss">
.chatroom-wrapper > .el-container {
  position: absolute;
  padding: 40px;
  width: 100%;
  height: 100%;
  .member {
    margin-top: 10px;
  }
  .content-box {
    margin-top: 10px;
  }
}

.submit {
  margin-top: 10px;
}

.el-header,
.el-footer {
  padding: 10px;
  color: #333;
}

.el-aside {
  padding: 10px;
  color: #333;
}

.el-main {
  padding: 10px;
  color: #333;
}
</style>
