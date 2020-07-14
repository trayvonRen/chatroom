<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="登录用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import handleWsMessage from "../../utils/handleWsMessage";

export default {
  name: "Login",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const ws = new WebSocket("ws://localhost:8084");
      ws.onopen = () => {
        var msg = {
          type: "username",
          data: this.form.name
        };
        ws.send(JSON.stringify(msg));
      };

      ws.onmessage = handleWsMessage;
      this.$store.commit("initWs", ws);
      this.$router.push("/chatroom");
    }
  }
};
</script>

<style scoped lang="scss">
.form-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 200px;
}
</style>
