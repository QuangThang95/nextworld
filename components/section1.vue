<template>
  <div>
    <v-sheet height="100%">
      <v-row>
        <v-col>
          <h1 class="py-3">Giới Thiệu & Quyền Lợi</h1>
          <div class="px-3">
            <div style="font-size : 0.9rem">
              📣 CÔNG TY NEXTWORLD DỊCH VỤ HỖ TRỢ PHẦN MỀM CHĂM SÓC KHÁCH HÀNG
              CHUYÊN BÁN HÀNG ONLINE,CHỦ TÀI KHOẢN TIKTOK VÀ YOUTUBE MUỐN BẬT
              KIẾM TIỀN,HOẶC TĂNG TƯƠNG TÁC UY TÍN.
            </div>
            <div style="font-size : 0.75rem" class="px-5">
              Phần mềm cộng đồng nextworld Tăng Người Theo Dõi ( Sub) Thật Cho
              FACEBOOK/TIKTOK/ING/YOUTUBE VIỆT NAM
            </div>
            <div>
              Link Website
              <a target="_blank" href="http://nextworld.email">NextWold</a>
            </div>
            <v-list>
              <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="child in item.items" :key="child.title">
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-wrap"
                      v-text="child.title"
                    ></v-list-item-title>
                    <ul>
                      <li v-for="i of child.des" :key="i">
                        <div>{{ i }}</div>
                      </li>
                    </ul>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: "mdi-ticket",
          active: true,
          items: [
            { title: "✅ Chỉ mua 1 lần và xài vĩnh viễn !!!" },
            {
              title: "✅ Lương max 3tr500",
              des: [
                "Mỗi ngày 100 (nếu làm đúng)",
                "Đủ 30 được cộng chuyên cần 500k",
                "Làm Sai , không đủ 30 ngày sẽ mất chuyên cần",
              ],
            },
            { title: "✅ Làm tại nhà 🏡" },
            { title: "✅ Không cần tải app" },
            { title: "✅ Không bán hàng online" },
            { title: "✅ Rảnh làm bận nghỉ 👉 Lương trả thẳng vào atm 👈" },
            {
              title:
                "✅ Phí thành viên là 300k 👉 Nếu bạn muốn dừng cty xẽ trả lại bạn 100%",
            },
          ],
          title: "ƯU ĐIỂM",
        },
        {
          action: "mdi-run",

          items: [
            {
              title: "✅ Hợp đồng 6 tháng",
              des: [
                "Từ 5 ctv trở lên và giúp đỡ họ phát triển đi lên.",
                "Lương cứng 3tr/tháng",
                "Hoa hồng 15%/tổng thu nhập của người mà bạn được tuyển",
              ],
            },
            {
              title: "✅ Hợp đồng 3năm",
              des: [
                "Từ 10 ctv trở lên và giúp đỡ họ phát triển đi lên",
                "Lương cố định 3tr/tháng",
                "Hoa hồng 15% / tổng thu nhập của người mà bạn được tuyển",
                "Thưởng thêm 5% doanh thu nhóm",
              ],
            },
            {
              title: "✅ Hợp đông 5 năm",
              des: [
                "Từ 30 ctv trở lên và nhóm hoạt động tốt,các ctv đều có cấp dưới",
                "Lương cơ bản 15tr/ tháng",
                "Được 3% trên tổng doanh thu của wed đang quản lý",
                "Được hỗ trợ trực tiếp từ admin cấp cao liên quan mọi vấn đề công việc",
                "Được khen thưởng và nâng cao chức danh khi hoạt động tốt và đạt yêu cầu công ty đề ra",
              ],
            },
          ],
          title: "❗️..QUYỀN LỢI CTY..❗️",
        },
      ],
    };
  },
};
</script>
