import { ipcMain } from "electron";
import createPage from "./createPage";

export default function() {
  ipcMain.on("createPage", function(e, page) {
    createPage(page).then(() => {
      e.reply("createPage", "创建成功");
    });
  });
}
