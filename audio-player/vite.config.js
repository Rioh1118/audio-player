import { defineConfig } from "vite";

export default defineConfig({
  // ViteがRustのエラーを隠さないようにする
  clearScreen: false,
  // Tauriは固定ポートを期待しているので、そのポートが利用できない場合は失敗する
  server: {
    strictPort: true,
  },
  // CLIによって設定された現在のターゲットに関する情報を含むTauri環境変数にアクセスするための設定
  envPrefix: [
    "VITE_",
    "TAURI_PLATFORM",
    "TAURI_ARCH",
    "TAURI_FAMILY",
    "TAURI_PLATFORM_VERSION",
    "TAURI_PLATFORM_TYPE",
    "TAURI_DEBUG",
  ],
  build: {
    // TauriはWindowsではChromiumを使用し、macOSとLinuxではWebKitを使用する
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // デバッグビルドのために最小化しない
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // デバッグビルドのためにソースマップを生成する
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
