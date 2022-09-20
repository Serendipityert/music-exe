<template>
  <div class="m-header" :style="dragY">
    <div class="flex-grow h-8 w-full" style="margin-top: 25px;">
      <t-row>
        <t-col :span="2">
          <div class="h-8 search" :style="dragN">
            <t-dropdown :min-column-width="400" :maxHeight="550" trigger="click">
             <t-input clearable placeholder="搜索音乐" v-model="search_name" @input="searchMusic"
              @click="handleClick" style="width: 250px;border-radius: 50%;">
              <template #prefix-icon>
                <svg t="1661342506054" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="52741" width="18" height="18">
                  <path
                    d="M327.466667 630.186667m-181.333334 0a181.333333 181.333333 0 1 0 362.666667 0 181.333333 181.333333 0 1 0-362.666667 0Z"
                    fill="#FFCA5F" p-id="52742"></path>
                  <path
                    d="M466.133333 171.52m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                    fill="#FFCA5F" p-id="52743"></path>
                  <path
                    d="M493.013333 823.253333a312.96 312.96 0 0 1-221.44-534.4 308.053333 308.053333 0 0 1 91.946667-64l26.453333 58.24a248.533333 248.533333 0 1 0 149.333334-18.133333l11.52-62.933333a313.173333 313.173333 0 0 1-56.96 621.013333z"
                    fill="#5C1CF7" p-id="52744"></path>
                  <path d="M669.184 731.52l45.248-45.226667 186.154667 186.133334-45.248 45.248z" fill="#5C1CF7"
                    p-id="52745"></path>
                </svg>
              </template>
            </t-input>
              <template #dropdown>
                <t-dropdown-menu>
                  <div v-show="searchRes">
                    <SearchResultDown :searchResult="searchResult" />
                  </div>
                  <div v-show="hot_search">
                    <HOTSearchDown :hotSearchResult="hotSearchResult"/>
                  </div>
                </t-dropdown-menu>
              </template>
            </t-dropdown>
          </div>
        </t-col>
        <t-col :span="5" :offset="offset">
          <div class="h-8 info flex flex-row" :style="dragN">
            <t-space :size="size">
              <Login />
              <div class="cursor-pointer" style="margin-left: -13px;">
                <t-dropdown trigger="hover">
                  <div style="margin-top: 1px;">
                    <svg t="1661493150773" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="35120" width="24" height="24">
                      <path
                        d="M512 509.5424m-432.3328 0a432.3328 432.3328 0 1 0 864.6656 0 432.3328 432.3328 0 1 0-864.6656 0Z"
                        fill="#ED5DF9" p-id="35121"></path>
                      <path
                        d="M287.0272 415.4368c-85.0432 0-160.4096 41.3696-207.104 105.0624 4.5568 182.7328 122.368 337.3056 285.952 396.032 103.2192-33.28 177.92-130.048 177.92-244.3776 0-141.7728-114.944-256.7168-256.768-256.7168z"
                        fill="#F27DFF" p-id="35122"></path>
                      <path
                        d="M355.2256 734.3616h321.7408c29.5424 0 54.4256-22.1184 57.856-51.456l34.6112-295.936L514.6624 527.36 263.9872 393.1648l33.3312 289.6384c3.4304 29.3888 28.3136 51.5584 57.9072 51.5584z"
                        fill="#F8CAFF" p-id="35123"></path>
                      <path
                        d="M270.7456 386.9696m-45.4144 0a45.4144 45.4144 0 1 0 90.8288 0 45.4144 45.4144 0 1 0-90.8288 0Z"
                        fill="#FFFFFF" p-id="35124"></path>
                      <path
                        d="M759.6032 386.9696m-45.4144 0a45.4144 45.4144 0 1 0 90.8288 0 45.4144 45.4144 0 1 0-90.8288 0Z"
                        fill="#FFFFFF" p-id="35125"></path>
                      <path d="M516.7104 316.5696m-48.384 0a48.384 48.384 0 1 0 96.768 0 48.384 48.384 0 1 0-96.768 0Z"
                        fill="#FFFFFF" p-id="35126"></path>
                      <path
                        d="M733.7472 688.8448l-217.0368-372.2752-218.7264 370.0736c5.0176 27.4432 28.9792 47.7184 57.2416 47.7184h321.7408c27.4944 0 50.8928-19.1488 56.7808-45.5168z"
                        fill="#FFFFFF" p-id="35127"></path>
                    </svg>
                  </div>
                  <template #dropdown>
                    <MemberGrade />
                  </template>
                </t-dropdown>
              </div>
              <router-link to="/theme">
                <div class="cursor-pointer">
                  <t-tooltip class="placement bottom center" theme="primary" content="换肤" placement="bottom" show-arrow>
                    <svg style="margin-top: 4px" t="1661253534459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="9658" width="20" height="20">
                      <path
                        d="M760.5 125.9h-53.3c-14.1 0-27.7 6.1-36.8 17-27.3 32.6-105.4 53.7-154.6 53.7-49.2 0-127.3-21.1-154.6-53.7-9.2-10.9-22.7-17-36.8-17H271c-13 0-25.4 5.2-34.6 14.6L59.3 320.6c-11.4 11.6-11.4 30.3 0 41.9l108 109.9c11.4 11.6 29.8 11.6 41.2 0l3.6-3.6c3.9-3.9 10.5-1.2 10.5 4.4v383.1c0 24.9 19.8 45.1 44.3 45.1h497.7c24.5 0 44.3-20.2 44.3-45.1V473.1c0-5.6 6.6-8.4 10.5-4.4l3.6 3.6c11.4 11.6 29.8 11.6 41.2 0l108-109.9c11.4-11.6 11.4-30.3 0-41.9L795.1 140.4c-9.2-9.3-21.7-14.5-34.6-14.5z"
                        fill="#1afa29" p-id="9659"></path>
                      <path
                        d="M934.7 400.5l37.5-38.1c11.4-11.6 11.4-30.3 0-41.9L795.1 140.4c-7-7.1-15.8-11.8-25.4-13.7 85.3 66.2 145.8 163 165 273.8zM59.3 320.6c-11.4 11.6-11.4 30.3 0 41.9l9.6 9.8c8.4-34.9 21-68.1 37.1-99.2l-46.7 47.5zM222.6 856.2c0 24.9 19.8 45.1 44.3 45.1h107.7c-56.1-16.4-107.5-43.6-152-79.2v34.1zM808.9 856.2v-64c-51.3 50.4-114.8 88.4-185.7 109.1h141.4c24.5 0 44.3-20.2 44.3-45.1z"
                        fill="#1afa29" p-id="9660"></path>
                      <path
                        d="M287.9 125.9H271c-13 0-25.4 5.2-34.6 14.6L106 273c-16.1 31.1-28.7 64.3-37.1 99.2l32.7 33.2C117.3 286 188.2 184 287.9 125.9zM861.8 455.8c0 6.4-0.2 12.7-0.5 19 1-0.8 1.9-1.6 2.8-2.5l70.6-71.8c-19.2-110.8-79.7-207.6-165-273.7-3-0.6-6.1-0.9-9.2-0.9h-53.3c-8.6 0-17 2.3-24.3 6.5 107.5 67.5 178.9 187.1 178.9 323.4zM808.9 649.8C742.5 762.2 620 837.6 480 837.6c-99.2 0-189.6-37.9-257.5-99.9v84.4c44.4 35.6 95.9 62.8 152 79.2h248.7c70.9-20.7 134.4-58.7 185.7-109.1V649.8z"
                        fill="#1afa29" p-id="9661"></path>
                      <path
                        d="M808.9 649.8V473.1c0-5.6 6.6-8.4 10.5-4.4l3.6 3.6c10.5 10.7 26.9 11.5 38.4 2.5 0.3-6.3 0.5-12.6 0.5-19 0-136.3-71.4-255.9-178.9-323.5-4.7 2.7-9 6.2-12.5 10.5-7.5 8.9-18.8 17-32.3 24C725 224.4 782.4 323 782.4 435c0 177.4-143.8 321.2-321.2 321.2-94.7 0-179.9-41-238.6-106.3v87.8c67.9 62 158.3 99.9 257.5 99.9 139.9 0 262.4-75.4 328.8-187.8zM350.4 133.5c-7.7-5-16.8-7.6-26.1-7.6h-36.4C188.2 184 117.3 286 101.6 405.5l38.6 39.3c-0.1-3.2-0.2-6.5-0.2-9.7 0-138.5 87.6-256.5 210.4-301.6z"
                        fill="#1afa29" p-id="9662"></path>
                      <path
                        d="M382.4 160.6c-8.6-5.4-16-11.4-21.3-17.8-3.1-3.7-6.7-6.8-10.7-9.4C227.6 178.6 140 296.6 140 435c0 3.3 0.1 6.5 0.2 9.7l27.1 27.6c6.3 6.4 14.9 9.3 23.1 8.6-5.6-21.3-8.6-43.6-8.6-66.7 0-123.2 85.6-226.5 200.6-253.6zM461.2 756.2c177.4 0 321.2-143.8 321.2-321.2 0-112-57.4-210.6-144.3-268.1-18.6 9.7-41.4 17.4-64 22.5 77.1 45.2 128.9 129 128.9 224.8 0 143.9-116.6 260.5-260.5 260.5-92.4 0-173.6-48.1-219.8-120.6v95.8c58.6 65.3 143.8 106.3 238.5 106.3z"
                        fill="#1afa29" p-id="9663"></path>
                      <path
                        d="M442.4 674.8c143.9 0 260.5-116.6 260.5-260.5 0-95.8-51.8-179.6-128.9-224.8-20.7 4.7-41.2 7.2-58.3 7.2-39.6 0-97.8-13.7-133.3-36-115 27.1-200.6 130.3-200.6 253.6 0 23 3 45.4 8.6 66.7 6.6-0.6 13-3.4 18-8.6l3.6-3.6c3.9-3.9 10.5-1.2 10.5 4.4v81c46.3 72.5 127.5 120.6 219.9 120.6z m-18.9-481.3c110.4 0 199.9 89.5 199.9 199.9s-89.5 199.9-199.9 199.9-199.9-89.5-199.9-199.9 89.5-199.9 199.9-199.9z"
                        fill="#1afa29" p-id="9664"></path>
                      <path
                        d="M423.5 593.3c110.4 0 199.9-89.5 199.9-199.9s-89.5-199.9-199.9-199.9S223.6 283 223.6 393.4s89.5 199.9 199.9 199.9z m-18.8-360c76.9 0 139.3 62.4 139.3 139.3s-62.4 139.3-139.3 139.3-139.3-62.4-139.3-139.3 62.4-139.3 139.3-139.3z"
                        fill="#1afa29" p-id="9665"></path>
                      <path d="M404.7 372.6m-139.3 0a139.3 139.3 0 1 0 278.6 0 139.3 139.3 0 1 0-278.6 0Z"
                        fill="#1afa29" p-id="9666"></path>
                      <path
                        d="M760.5 143.9c8.2 0 15.9 3.3 21.8 9.2l177.1 180.1c4.5 4.6 4.5 12.1 0 16.6l-108 109.9c-2.1 2.1-4.8 3.3-7.8 3.3-2.9 0-5.7-1.2-7.8-3.3l-3.6-3.6c-4.6-4.7-10.7-7.2-17.1-7.2-13.3 0-24.2 10.9-24.2 24.3v383.1c0 14.9-11.8 27.1-26.3 27.1H266.9c-14.5 0-26.3-12.1-26.3-27.1V473.1c0-13.4-10.9-24.3-24.2-24.3-6.5 0-12.6 2.6-17.1 7.2l-3.5 3.6c-2.1 2.1-4.8 3.3-7.8 3.3-2.9 0-5.7-1.2-7.8-3.3l-108-109.9c-4.5-4.6-4.5-12.1 0-16.6l177-180.1c5.8-5.9 13.6-9.2 21.8-9.2h53.3c9 0 17.4 3.9 23 10.6 18.8 22.4 52.4 36.6 77.4 44.7 30.2 9.7 64.2 15.5 91 15.5s60.8-5.8 91-15.5c25-8 58.7-22.3 77.4-44.7 5.6-6.7 14-10.6 23-10.6l53.4 0.1m0-18h-53.3c-14.1 0-27.7 6.1-36.8 17-27.3 32.6-105.4 53.7-154.6 53.7-49.2 0-127.3-21.1-154.6-53.7-9.2-10.9-22.7-17-36.8-17H271c-13 0-25.4 5.2-34.6 14.6L59.3 320.6c-11.4 11.6-11.4 30.3 0 41.9l108 109.9c5.7 5.8 13.1 8.7 20.6 8.7s14.9-2.9 20.6-8.7l3.6-3.6c1.3-1.3 2.8-1.8 4.3-1.8 3.2 0 6.2 2.5 6.2 6.3v383.1c0 24.9 19.8 45.1 44.3 45.1h497.7c24.5 0 44.3-20.2 44.3-45.1V473.1c0-3.8 3-6.3 6.2-6.3 1.5 0 3.1 0.6 4.3 1.8l3.6 3.6c5.7 5.8 13.1 8.7 20.6 8.7s14.9-2.9 20.6-8.7l108-109.9c11.4-11.6 11.4-30.3 0-41.9l-177.1-180c-9.2-9.3-21.7-14.5-34.6-14.5z"
                        fill="#1afa29" p-id="9667"></path>
                      <path
                        d="M309.3 384h206.8c19 0 34.5 15.4 34.5 34.5v275.7c0 19-15.4 34.5-34.5 34.5H309.3c-19 0-34.5-15.4-34.5-34.5V418.5c0.1-19 15.5-34.5 34.5-34.5z"
                        fill="#1afa29" p-id="9668"></path>
                      <path
                        d="M167.7 303c-7-7-7-18.4 0-25.5l87.8-87.8c7-7 18.4-7 25.5 0s7 18.4 0 25.5L193.2 303c-7.1 7.1-18.5 7.1-25.5 0zM118.5 352.3c-7-7-7-18.4 0-25.5l7.5-7.5c7-7 18.4-7 25.5 0 7 7 7 18.4 0 25.5l-7.5 7.5c-7.1 7-18.5 7-25.5 0z"
                        fill="#1afa29" p-id="9669"></path>
                    </svg>
                  </t-tooltip>
                </div>
              </router-link>
              <div class="cursor-pointer">
                <t-dropdown trigger="hover">
                  <div>
                    <svg t="1661493403681" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="42996" width="26" height="26">
                      <path d="M516.4 433.9m-85 0a85 85 0 1 0 170 0 85 85 0 1 0-170 0Z" fill="#1E88E5" p-id="42997">
                      </path>
                      <path
                        d="M741 739.5c0-12-5.7-23.3-15.3-30.1-33-23.5-104.1-63-209.3-63-97.1 0-147.7 27.9-188.4 50.3-3.7 2-7.2 4-10.7 5.9-15.7 8.5-25.4 24.8-25.4 42.7v50.2c60.5 49.1 137.6 78.5 221.5 78.5 86.8 0 166.2-31.5 227.6-83.6v-50.9z"
                        fill="#1E88E5" p-id="42998"></path>
                      <path
                        d="M299.9 670.5c3.4-1.8 6.9-3.8 10.5-5.7 42-23.1 99.6-54.8 206-54.8 115.4 0 194.4 42.9 230.4 69.8 24.8 18.5 30 46.3 30.8 62.3 0.2 4.3 5.5 6 8.2 2.7 51.9-63.4 82.1-145.1 79.4-234-5.8-186.8-159.6-338-346.5-340.8-196.9-3-357.5 155.8-357.5 352 0 87.8 32.2 168.1 85.4 229.7 3.6 4.2 10.4 2.7 11.9-2.6 6.2-22.2 20.9-67.5 41.4-78.6z m216.5-370.1c73.7 0 133.5 59.8 133.5 133.5s-59.8 133.5-133.5 133.5-133.5-59.8-133.5-133.5 59.7-133.5 133.5-133.5z"
                        fill="#64B5F6" p-id="42999"></path>
                    </svg>
                  </div>
                  <template #dropdown>
                    <UserInfo />
                  </template>
                </t-dropdown>
              </div>
              <div class="cursor-pointer">
                <t-dropdown trigger="hover">
                  <div>
                    <svg t="1661493611932" class="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="46265" width="26" height="26">
                      <path
                        d="M875.4 495.9H736.8c-46.2 0-84.7-38.5-84.7-84.7v-42.3c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7v42.3c0 46.2-38.5 84.7-84.7 84.7zM287.2 744.1H148.6c-46.2 0-84.7-38.5-84.7-84.7V617c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7v42.3c-0.1 46.3-38.5 84.8-84.7 84.8z"
                        fill="#FFF433" p-id="46266"></path>
                      <path
                        d="M761.9 491.6H623.3c-46.2 0-84.7-38.5-84.7-84.7v-42.3c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7V407c0 46.1-38.5 84.6-84.7 84.6zM623.3 318.4c-25 0-46.2 21.2-46.2 46.2V407c0 25 21.2 46.2 46.2 46.2h138.6c25 0 46.2-21.2 46.2-46.2v-42.3c0-25-21.2-46.2-46.2-46.2H623.3zM415.5 491.6H276.9c-46.2 0-84.7-38.5-84.7-84.7v-42.3c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7V407c-0.1 46.1-38.5 84.6-84.7 84.6zM276.9 318.4c-25 0-46.2 21.2-46.2 46.2V407c0 25 21.2 46.2 46.2 46.2h138.6c25 0 46.2-21.2 46.2-46.2v-42.3c0-25-21.2-46.2-46.2-46.2H276.9z m138.6 423.4H276.9c-46.2 0-84.7-38.5-84.7-84.7v-42.3c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7v42.3c-0.1 46.2-38.5 84.7-84.7 84.7zM276.9 568.6c-25 0-46.2 21.2-46.2 46.2v42.3c0 25 21.2 46.2 46.2 46.2h138.6c25 0 46.2-21.2 46.2-46.2v-42.3c0-25-21.2-46.2-46.2-46.2H276.9z m485 173.2H623.3c-46.2 0-84.7-38.5-84.7-84.7v-42.3c0-46.2 38.5-84.7 84.7-84.7h138.6c46.2 0 84.7 38.5 84.7 84.7v42.3c0 46.2-38.5 84.7-84.7 84.7zM623.3 568.6c-25 0-46.2 21.2-46.2 46.2v42.3c0 25 21.2 46.2 46.2 46.2h138.6c25 0 46.2-21.2 46.2-46.2v-42.3c0-25-21.2-46.2-46.2-46.2H623.3z m0 0"
                        fill="#76569A" p-id="46267"></path>
                    </svg>
                  </div>
                  <template #dropdown>
                    <MainMenu />
                  </template>
                </t-dropdown>
              </div>
              |
              <div class="cursor-pointer">
                <t-tooltip class="placement bottom center" theme="success" content="最小化" placement="bottom" show-arrow>
                  <RemoveIcon size="large" @click="minimize" />
                </t-tooltip>
              </div>
              <div class="cursor-pointer">
                <t-tooltip class="placement bottom center" theme="success" content="最大化" placement="bottom" show-arrow>
                  <QueueIcon v-show="max" size="large" @click="maximize" />
                </t-tooltip>
                <t-tooltip class="placement bottom center" theme="success" content="还原" placement="bottom" show-arrow>
                  <RectangleIcon v-show="!max" size="large" @click="maximize" />
                </t-tooltip>
              </div>
              <div class="cursor-pointer">
                <t-tooltip class="placement bottom center" theme="danger" content="关闭" placement="bottom" show-arrow>
                  <CloseIcon size="large" @click="closeApp" />
                </t-tooltip>
              </div>
            </t-space>
          </div>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  CloseIcon, QueueIcon, RemoveIcon, RectangleIcon
} from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import MainMenu from './main-menu/index.vue';
import MemberGrade from './member/index.vue';
import UserInfo from './user-info/index.vue';
import Login from '@/pages/user/index.vue';
import { searchMusicProposal } from '@/api/music/index'
import { hotSearchMusic } from '@/api/music/index'
import SearchResultDown from '@/components/search/down/index.vue'
import HOTSearchDown from '@/components/search/hot/index.vue'

const { ipcRenderer } = require("electron");

// defineEmits(['userLogin']);l

const size = ref(18);
const offset = ref(3);
const max = ref(true);
const dragY = ref('-webkit-app-region: drag;-webkit-user-select: none;');
const dragN = ref( '-webkit-app-region: no-drag;' );

// 搜索的歌曲名
const search_name = ref( '' );
const searchResult = ref( );
const hotSearchResult = ref( );
const searchRes = ref(false);
const hot_search = ref(false);

// 搜索歌曲
const searchMusic = () => {
  searchMusicProposal(  search_name.value ).then( ( res: any ) => {
    if ( res.code === 200 ) {
      searchRes.value = true
      hot_search.value = false
      searchResult.value = res.result
    }
  }).catch((err: any) => {
    MessagePlugin.warning(err)
  })
}
// 热搜榜
const handleClick = ( ) => {
  hot_search.value = true
  searchRes.value = false
  hotSearchMusic().then( ( res: any ) => {
    if ( res.code === 200 ) {
      hotSearchResult.value = res.data
    }
  }).catch((err: any) => {
    MessagePlugin.warning(err)
  })
};

// 关闭按钮事件
const closeApp = () => {
  ipcRenderer.send('close-app')
}

// 最小化按钮事件
const minimize = () => {
  ipcRenderer.send('minimize-app')
}

// 最大化按钮事件
const maximize = () => {
  ipcRenderer.send('maximize-app')
  dragY.value = ''
  dragN.value = ''
}

// 此时须为最大化
ipcRenderer.on('maximize-app', () => {
  max.value = false
  offset.value = 5
})

// 此时须为还原初始值
ipcRenderer.on('restore-app', () => {
  max.value = true
  offset.value = 3
  dragY.value = '-webkit-app-region: drag;-webkit-user-select: none;'
  dragN.value = '-webkit-app-region: no-drag;'
})
</script>

<style scoped>
.m-header {
  position: fixed;
  top: 0;
  left: 230px;
  z-index: 2;
  width: 100%;
  color: #000;
  text-align: left;
}

.search {
  line-height: 30px;
  margin-left: 20px;
}

.info {
  line-height: 30px;
}
</style>
