<template>
  <div>
    <v-sheet height="100%">
      <v-row>
        <v-col>
          <h1 class="py-3">Hướng Dẫn Kiếm Tiền</h1>
          <div class="px-3">
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">
                  Đăng Kí Tài Khoản
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">
                  Hướng Dẫn Nạp Tiền Kích hoạt Tài Khoản
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                  Hướng Dẫn làm nhiệm vụ mỗi ngày
                </v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <div class="text-center">
                    <video width="320" height="240" controls>
                      <source
                        :src="require('@/static/hero/dki.mp4')"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <v-btn color="primary" @click="e1 = 2">
                    Continue
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <div class="text-center">
                    <video width="320" height="240" controls loop>
                      <source
                        :src="require('@/static/hero/naptien.mp4')"
                        type="video/mp4"
                      />
                    </video>
                    <div class="mb-3">
                      Liên Hệ Zalo : 0348957552
                      <strong>( Quang Thắng )</strong> <br />
                      để được Đăng Kí Kích Hoạt
                    </div>
                  </div>
                  <v-btn color="primary" @click="e1 = 3">
                    Continue
                  </v-btn>

                  <v-btn @click="e1--" text>
                    Back
                  </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <div class="text-center">
                    <video width="320" height="240" controls loop>
                      <source
                        :src="require('@/static/hero/nhiemvu.mp4')"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <v-btn color="primary" @click="e1 = 1">
                    Continue
                  </v-btn>

                  <v-btn @click="e1--" text>
                    Back
                  </v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </div>
          <div class="px-3 py-3">
            Ở Phần này tk chưa kích hoạt sẽ là <strong>Nhân Viên</strong> <br />
            Kích hoạt rồi sẽ hiển thị là <strong>Đại Lí</strong> và Bắt đầu được
            làm nhiệm vụ <br /><strong>Lưu Ý</strong> : Bạn phải chuyển khoản
            đúng nội dung không hệ Thống sẽ k kích hoạt tk của bạn <br />
            STK : <strong>275704070001258</strong> <br />
            Message :
            <strong>tentkcuaban> dk nv ctv quangthang1995</strong>
            <br />
            <v-text-field
              v-bind:value="input"
              @input="edit"
              label="nhập tên tk và ấn copy"
              outlined
            ></v-text-field>
            <v-btn outlined color="primary" @click="copyTestingCode()"
              >copy</v-btn
            ><br />
            Tên tk bạn là {{ input }}, message sẽ là: <br />
            <strong>{{ textCopy }}</strong>
            <input type="hidden" id="testing-code" :value="textCopy" />
          </div>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" :timeout="2000">
        {{ "Copy : " + textCopy }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
      snackbar: false,
      input: "",
    };
  },
  mounted() {
    console.log(this.$ga.page("/"));
  },
  computed: {
    textCopy() {
      return this.input + " dk nv ctv quangthang1995";
    },
  },
  methods: {
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        this.snackbar = true;
      } catch (err) {
        alert("Oops, unable to copy");
      }

      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    edit(a) {
      this.input = a;
    },
  },
};
</script>
