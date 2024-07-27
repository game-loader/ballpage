/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OerRJE5VzdU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FingerprintIcon className="w-8 h-8" />
            <h1 className="text-2xl font-bold">手指力量检测器</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              功能
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              规格
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              立即购买
            </Link>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            联系我们
          </Button>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-20 px-6 md:px-12">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">精准测量您的手指力量</h2>
              <p className="text-muted-foreground mb-6">
                我们先进的手指力量检测器提供准确的手指力量测量,帮助您跟踪进度,实现健身目标。
              </p>
              <Button className="mb-4">立即购买</Button>
            </div>
            <div>
              <Image
                src="https://pic.superbed.cc/item/66a44c8ffcada11d3720afcb.png"
                alt="手指力量检测器"
                width={500}
                height={500}
                className="mx-auto"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="bg-muted py-12 md:py-20 px-6 md:px-12"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">主要功能</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <RulerIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">精准测量</h3>
                <p className="text-muted-foreground">
                  我们先进的传感器技术提供准确可靠的手指力量测量。
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <BarChartIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">进度跟踪</h3>
                <p className="text-muted-foreground">
                  使用我们全面的数据跟踪功能,监测您的手指力量改善情况。
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <BluetoothIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">无线连接</h3>
                <p className="text-muted-foreground">
                  通过蓝牙无缝连接您的设备到智能手机或平板电脑,轻松访问数据。
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <WeightIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">健身跟踪</h3>
                <p className="text-muted-foreground">
                  将您的手指力量数据与流行的健身应用程序集成,监测您的整体体能表现。
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <BatteryIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">长续航电池</h3>
                <p className="text-muted-foreground">
                  享受我们强大高效的电池带来的长时间使用。
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <DiscIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">坚固耐用</h3>
                <p className="text-muted-foreground">
                  我们的手指力量检测器经过设计,能够承受日常使用,确保长期性能。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="specs" className="py-12 md:py-20 px-6 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">技术规格</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">手指力量检测器规格</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>尺寸: 直径98mm球形,带硅胶外壳</li>
                  <li>底座: 200*200*250mm高</li>
                  <li>电源: 锂离子电池,1200mAh</li>
                  <li>手指压力数据: 5个手指</li>
                  <li>压力传感器范围: 0-10Kg</li>
                  <li>陀螺仪: 3轴角度数据</li>
                  <li>连接性: 蓝牙BLE5.2,可同时接收4个设备的数据</li>
                  <li>数据传输率: 100Hz</li>
                  <li>处理器: 32位ARM</li>
                  <li>振动传感器: 是</li>
                  <li>软件: 包含专业配套软件</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">蓝牙模块规格</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>蓝牙协议: BLE5.2</li>
                  <li>频率范围: 2400MHz-2483.5MHz</li>
                  <li>接收灵敏度: -98dBm@1Mbps</li>
                  <li>发射功率: -30dBm to +10dBm</li>
                  <li>工作电压: 1.7V-3.6V</li>
                  <li>参考距离: 180m长距离文件传输</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">陀螺仪规格</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>电源: 3.3-5V</li>
                  <li>电流消耗: 小于10mA</li>
                  <li>通信: TTL</li>
                  <li>角度范围: X, Z轴 ±180°, Y轴 ±90°</li>
                  <li>角度精度: X, Y轴 0.2°, Z轴 0.5°</li>
                  <li>报告速率: 200Hz</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">压力传感器规格</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>传感器厚度: 小于0.35mm</li>
                  <li>引脚间距: 2.54mm</li>
                  <li>测量范围: 0-10Kg (可选)</li>
                  <li>迟滞: 小于5%</li>
                  <li>漂移: 小于6%</li>
                  <li>响应时间: 小于10ms</li>
                  <li>精度: 小于3% FS (满量程)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="buy" className="bg-muted py-12 md:py-20 px-6 md:px-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">获取您的手指力量检测器</h2>
            <p className="text-muted-foreground mb-8">
              立即下单,开始精准测量您的手指力量。
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="px-8">
                立即购买
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <FingerprintIcon className="w-6 h-6" />
            <span className="text-sm">© 2023 手指力量检测器</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              隐私政策
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              服务条款
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              联系我们
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BatteryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}

function BluetoothIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </svg>
  );
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function FingerprintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  );
}

function RulerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  );
}

function WeightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
