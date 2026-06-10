# discord-godmode-snippet

A Discord console snippet that patches webpack modules to override permission checks. For educational and research purposes only.

---

Script chạy trên console Discord, patch webpack module để bypass kiểm tra permission. Chỉ dùng cho mục đích nghiên cứu và học tập.

---

## Usage / Cách dùng

1. Open Discord in browser or desktop app / Mở Discord trên trình duyệt hoặc app desktop
2. Open DevTools (`F12` or `Ctrl+Shift+I`) / Mở DevTools (`F12` hoặc `Ctrl+Shift+I`)
3. Go to **Console** tab / Chuyển sang tab **Console**
4. Paste the contents of `godmode.js` and hit Enter / Paste nội dung file `godmode.js` rồi nhấn Enter

## How it works / Cách hoạt động

- Extracts loaded webpack modules from `webpackChunkdiscord_app` / Trích xuất webpack module từ `webpackChunkdiscord_app`
- Patches `PermissionStore` prototype methods to always return `true` / max permissions / Patch prototype của `PermissionStore` để luôn trả về `true` / quyền tối đa
- Sets current user as owner of all guilds via `GuildStore` listener / Đặt user hiện tại làm owner tất cả server thông qua `GuildStore` listener

## Disclaimer / Lưu ý

This is a personal experiment for educational purposes. Use at your own risk. This may violate [Discord's Terms of Service](https://discord.com/terms). The author is not responsible for any consequences.

Đây là script cá nhân phục vụ mục đích nghiên cứu. Sử dụng hoàn toàn tự chịu rủi ro. Có thể vi phạm [Discord ToS](https://discord.com/terms). Tác giả không chịu trách nhiệm về bất kỳ hậu quả nào.

## License / Giấy phép

MIT
