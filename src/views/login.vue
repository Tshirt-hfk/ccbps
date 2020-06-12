<template>
  <div class="main">
    <div class="background"></div>
    <div class="login">
        <div class="login-log">
            <img class="log" src="/static/images/login-log.png" />
            
            <div class="log-word">网络空间犯罪行为感知系统</div>
        </div>
      <div class="login-center">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkAge = (rule, value, callback) => {
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  top: 300px;
  width: 100%;
}
.background {
  background: blue;
  height: 100px;
  z-index: 98;
}
.login {
  background: white;
  left: 60%;
  position: relative;
  width: 400px;
  height: 400px;
  top: -250px;
  z-index: 99;
  border-top:8px solid blue;
}
.login-log {
    height: 150px;
}
.log {
    margin-top: 10px;
    margin-left: 154px;
    width: 70px;
    height: 70px;
}
.log-word {
    margin-top: 5px;
    height: 80px;
    line-height: 80px;
    font: 30px bold;
    color: blue;
    font-weight: 800;
    text-align: center;
}
.login-center {
    margin-left: 20px;
    width: 300px;
}
</style>