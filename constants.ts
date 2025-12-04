import { Brand, ServiceItem, Status } from './types';

export const SERVICE_DATA: ServiceItem[] = [
  // ================= SAMSUNG (2018-2024) =================
  // S Series
  { id: 'sam-s24u', model: 'Samsung Galaxy S24 Ultra', brand: Brand.SAMSUNG, serviceName: 'FRP / Google Lock', price: 1800, status: Status.AVAILABLE },
  { id: 'sam-s24p', model: 'Samsung Galaxy S24+', brand: Brand.SAMSUNG, serviceName: 'Country Lock Remove', price: 2800, status: Status.AVAILABLE },
  { id: 'sam-s23u', model: 'Samsung Galaxy S23 Ultra', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 1500, status: Status.AVAILABLE },
  { id: 'sam-s22u', model: 'Samsung Galaxy S22 Ultra', brand: Brand.SAMSUNG, serviceName: 'Baseband Repair', price: 1500, status: Status.SERVER_DOWN },
  { id: 'sam-s21fe', model: 'Samsung Galaxy S21 FE', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 800, status: Status.AVAILABLE },
  { id: 'sam-s20', model: 'Samsung Galaxy S20 / S20+', brand: Brand.SAMSUNG, serviceName: 'Samsung Account', price: 1000, status: Status.AVAILABLE },
  { id: 'sam-s10', model: 'Samsung Galaxy S10 / S10+', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 600, status: Status.AVAILABLE },
  { id: 'sam-s9', model: 'Samsung Galaxy S9 / S9+', brand: Brand.SAMSUNG, serviceName: 'Pattern Reset', price: 400, status: Status.AVAILABLE },
  
  // Z Series
  { id: 'sam-zfold5', model: 'Samsung Galaxy Z Fold 5', brand: Brand.SAMSUNG, serviceName: 'Samsung Account Remove', price: 2000, status: Status.AVAILABLE },
  { id: 'sam-zflip3', model: 'Samsung Galaxy Z Flip 3', brand: Brand.SAMSUNG, serviceName: 'Dead Boot Repair', price: 1500, status: Status.DELAYED },

  // A Series (Latest to Old)
  { id: 'sam-a55', model: 'Samsung Galaxy A55 5G', brand: Brand.SAMSUNG, serviceName: 'KG Lock Bypass', price: 1200, status: Status.DELAYED },
  { id: 'sam-a54', model: 'Samsung Galaxy A54', brand: Brand.SAMSUNG, serviceName: 'KG Lock Bypass', price: 1000, status: Status.AVAILABLE },
  { id: 'sam-a53', model: 'Samsung Galaxy A53', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 500, status: Status.AVAILABLE },
  { id: 'sam-a52s', model: 'Samsung Galaxy A52s', brand: Brand.SAMSUNG, serviceName: 'Touch Fix (Software)', price: 400, status: Status.AVAILABLE },
  { id: 'sam-a51', model: 'Samsung Galaxy A51', brand: Brand.SAMSUNG, serviceName: 'Dead Boot Repair', price: 600, status: Status.AVAILABLE },
  { id: 'sam-a50', model: 'Samsung Galaxy A50', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 250, status: Status.AVAILABLE },
  { id: 'sam-a34', model: 'Samsung Galaxy A34', brand: Brand.SAMSUNG, serviceName: 'Flashing', price: 450, status: Status.AVAILABLE },
  { id: 'sam-a32', model: 'Samsung Galaxy A32', brand: Brand.SAMSUNG, serviceName: 'Pattern Reset', price: 300, status: Status.AVAILABLE },
  { id: 'sam-a30', model: 'Samsung Galaxy A30s', brand: Brand.SAMSUNG, serviceName: 'Logo Hang Fix', price: 350, status: Status.AVAILABLE },
  { id: 'sam-a14', model: 'Samsung Galaxy A14 5G', brand: Brand.SAMSUNG, serviceName: 'Pattern Unlock', price: 300, status: Status.AVAILABLE },
  { id: 'sam-a12', model: 'Samsung Galaxy A12', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock (Knox)', price: 300, status: Status.AVAILABLE },
  { id: 'sam-a10s', model: 'Samsung Galaxy A10s', brand: Brand.SAMSUNG, serviceName: 'Dead Boot Fix', price: 350, status: Status.AVAILABLE },
  
  // M & F Series
  { id: 'sam-m55', model: 'Samsung Galaxy M55', brand: Brand.SAMSUNG, serviceName: 'Flashing', price: 500, status: Status.AVAILABLE },
  { id: 'sam-m31', model: 'Samsung Galaxy M31', brand: Brand.SAMSUNG, serviceName: 'Restart Fix', price: 400, status: Status.AVAILABLE },
  { id: 'sam-f23', model: 'Samsung Galaxy F23', brand: Brand.SAMSUNG, serviceName: 'FRP Unlock', price: 350, status: Status.AVAILABLE },
  { id: 'sam-j7', model: 'Samsung Galaxy J7 Pro', brand: Brand.SAMSUNG, serviceName: 'Pattern Reset', price: 200, status: Status.AVAILABLE }, // Legacy 2017-18

  // ================= VIVO (2018-2024) =================
  // X Series
  { id: 'viv-x100', model: 'Vivo X100 Pro', brand: Brand.VIVO, serviceName: 'Demo Remove', price: 2000, status: Status.AVAILABLE },
  { id: 'viv-x80', model: 'Vivo X80', brand: Brand.VIVO, serviceName: 'Account Remove', price: 1200, status: Status.AVAILABLE },
  
  // V Series
  { id: 'viv-v30', model: 'Vivo V30 Pro', brand: Brand.VIVO, serviceName: 'FRP / Pattern', price: 600, status: Status.AVAILABLE },
  { id: 'viv-v29', model: 'Vivo V29', brand: Brand.VIVO, serviceName: 'Screen Lock Remove', price: 500, status: Status.AVAILABLE },
  { id: 'viv-v27', model: 'Vivo V27', brand: Brand.VIVO, serviceName: 'Demo Mode Fix', price: 800, status: Status.AVAILABLE },
  { id: 'viv-v23', model: 'Vivo V23', brand: Brand.VIVO, serviceName: 'FRP Unlock', price: 400, status: Status.AVAILABLE },
  { id: 'viv-v20', model: 'Vivo V20', brand: Brand.VIVO, serviceName: 'Downgrade Android', price: 400, status: Status.AVAILABLE },
  { id: 'viv-v15', model: 'Vivo V15 Pro', brand: Brand.VIVO, serviceName: 'Pop-up Cam Fix (Soft)', price: 350, status: Status.AVAILABLE },
  { id: 'viv-v11', model: 'Vivo V11 Pro', brand: Brand.VIVO, serviceName: 'Pattern Reset', price: 300, status: Status.AVAILABLE },

  // Y Series
  { id: 'viv-y200', model: 'Vivo Y200', brand: Brand.VIVO, serviceName: 'FRP Unlock', price: 300, status: Status.AVAILABLE },
  { id: 'viv-y100', model: 'Vivo Y100', brand: Brand.VIVO, serviceName: 'Pattern Unlock', price: 300, status: Status.AVAILABLE },
  { id: 'viv-y21', model: 'Vivo Y21', brand: Brand.VIVO, serviceName: 'Dead Boot Fix', price: 500, status: Status.AVAILABLE },
  { id: 'viv-y20', model: 'Vivo Y20', brand: Brand.VIVO, serviceName: 'FRP Unlock', price: 250, status: Status.AVAILABLE },
  { id: 'viv-y12', model: 'Vivo Y12', brand: Brand.VIVO, serviceName: 'Brom Mode Flash', price: 300, status: Status.AVAILABLE },
  { id: 'viv-y91', model: 'Vivo Y91/Y93/Y95', brand: Brand.VIVO, serviceName: 'Pattern Reset', price: 150, status: Status.AVAILABLE },
  { id: 'viv-y81', model: 'Vivo Y81/Y83', brand: Brand.VIVO, serviceName: 'Unlock Tool Flash', price: 200, status: Status.AVAILABLE },

  // ================= OPPO (2018-2024) =================
  { id: 'opp-r11', model: 'OPPO Reno 11', brand: Brand.OPPO, serviceName: 'Region Unlock', price: 1200, status: Status.AVAILABLE },
  { id: 'opp-r6', model: 'OPPO Reno 6', brand: Brand.OPPO, serviceName: 'Flashing', price: 500, status: Status.AVAILABLE },
  { id: 'opp-f25', model: 'OPPO F25 Pro', brand: Brand.OPPO, serviceName: 'FRP Unlock', price: 500, status: Status.AVAILABLE },
  { id: 'opp-f19', model: 'OPPO F19 Pro', brand: Brand.OPPO, serviceName: 'Screen Lock', price: 350, status: Status.AVAILABLE },
  { id: 'opp-f11', model: 'OPPO F11 Pro', brand: Brand.OPPO, serviceName: 'Pattern Reset', price: 250, status: Status.AVAILABLE },
  { id: 'opp-a78', model: 'OPPO A78', brand: Brand.OPPO, serviceName: 'Network Unlock', price: 600, status: Status.AVAILABLE },
  { id: 'opp-a5s', model: 'OPPO A5s', brand: Brand.OPPO, serviceName: 'FRP Unlock', price: 200, status: Status.AVAILABLE },
  { id: 'opp-a3s', model: 'OPPO A3s', brand: Brand.OPPO, serviceName: 'eMMC Repair', price: 800, status: Status.AVAILABLE },

  // ================= REALME (2018-2024) =================
  { id: 'rlm-12p', model: 'Realme 12 Pro+', brand: Brand.REALME, serviceName: 'Region Lock', price: 1000, status: Status.AVAILABLE },
  { id: 'rlm-gt2', model: 'Realme GT 2', brand: Brand.REALME, serviceName: 'Unbrick (EDL)', price: 1200, status: Status.AVAILABLE },
  { id: 'rlm-10', model: 'Realme 10', brand: Brand.REALME, serviceName: 'FRP Unlock', price: 400, status: Status.AVAILABLE },
  { id: 'rlm-8', model: 'Realme 8', brand: Brand.REALME, serviceName: 'Pattern Reset', price: 300, status: Status.AVAILABLE },
  { id: 'rlm-5p', model: 'Realme 5 Pro', brand: Brand.REALME, serviceName: 'Flashing', price: 350, status: Status.AVAILABLE },
  { id: 'rlm-3p', model: 'Realme 3 Pro', brand: Brand.REALME, serviceName: 'FRP Unlock', price: 250, status: Status.AVAILABLE },
  { id: 'rlm-2p', model: 'Realme 2 Pro', brand: Brand.REALME, serviceName: 'Unbrick', price: 400, status: Status.AVAILABLE },
  { id: 'rlm-c1', model: 'Realme C1 / C2', brand: Brand.REALME, serviceName: 'Pattern Reset', price: 200, status: Status.AVAILABLE },

  // ================= XIAOMI / REDMI / POCO (2018-2024) =================
  { id: 'mi-14', model: 'Xiaomi 14 Ultra', brand: Brand.XIAOMI, serviceName: 'Bootloader Unlock', price: 2000, status: Status.DELAYED },
  { id: 'mi-11x', model: 'Mi 11X', brand: Brand.XIAOMI, serviceName: 'WiFi/Audio Fix', price: 2500, status: Status.AVAILABLE },
  { id: 'red-n13', model: 'Redmi Note 13 Pro', brand: Brand.XIAOMI, serviceName: 'Mi Account Bypass', price: 1000, status: Status.AVAILABLE },
  { id: 'red-n10p', model: 'Redmi Note 10 Pro', brand: Brand.XIAOMI, serviceName: 'Camera Dead Fix', price: 1200, status: Status.AVAILABLE },
  { id: 'red-n7p', model: 'Redmi Note 7 Pro', brand: Brand.XIAOMI, serviceName: 'eMMC Change', price: 1500, status: Status.AVAILABLE },
  { id: 'red-6a', model: 'Redmi 6A', brand: Brand.XIAOMI, serviceName: 'Flashing', price: 200, status: Status.AVAILABLE },
  
  { id: 'poc-x6', model: 'POCO X6 Pro', brand: Brand.POCO, serviceName: 'Region Unlock', price: 1000, status: Status.AVAILABLE },
  { id: 'poc-x3', model: 'POCO X3 Pro', brand: Brand.POCO, serviceName: 'CPU Reballing', price: 2200, status: Status.AVAILABLE },
  { id: 'poc-f1', model: 'POCO F1', brand: Brand.POCO, serviceName: 'Flashing', price: 400, status: Status.AVAILABLE },

  // ================= ONEPLUS (2018-2024) =================
  { id: 'op-12', model: 'OnePlus 12', brand: Brand.ONEPLUS, serviceName: 'Unbrick (Ops Tool)', price: 1500, status: Status.AVAILABLE },
  { id: 'op-10r', model: 'OnePlus 10R', brand: Brand.ONEPLUS, serviceName: 'CrashDump Fix', price: 900, status: Status.AVAILABLE },
  { id: 'op-8', model: 'OnePlus 8 / 8 Pro', brand: Brand.ONEPLUS, serviceName: 'FRP Unlock', price: 500, status: Status.AVAILABLE },
  { id: 'op-6t', model: 'OnePlus 6T', brand: Brand.ONEPLUS, serviceName: 'Unbrick', price: 600, status: Status.AVAILABLE },

  // ================= iQOO (2020-2024) =================
  { id: 'iq-12', model: 'iQOO 12', brand: Brand.IQOO, serviceName: 'Demo Remove', price: 1500, status: Status.AVAILABLE },
  { id: 'iq-neo7', model: 'iQOO Neo 7', brand: Brand.IQOO, serviceName: 'FRP Unlock', price: 500, status: Status.AVAILABLE },
  { id: 'iq-z6', model: 'iQOO Z6', brand: Brand.IQOO, serviceName: 'Pattern Reset', price: 400, status: Status.AVAILABLE },
  { id: 'iq-3', model: 'iQOO 3', brand: Brand.IQOO, serviceName: 'Dead Boot Repair', price: 800, status: Status.AVAILABLE },

  // ================= MOTOROLA =================
  { id: 'moto-e40', model: 'Moto Edge 40', brand: Brand.MOTOROLA, serviceName: 'Rescue Tool Flash', price: 500, status: Status.AVAILABLE },
  { id: 'moto-g60', model: 'Moto G60', brand: Brand.MOTOROLA, serviceName: 'FRP Unlock', price: 300, status: Status.AVAILABLE },
  { id: 'moto-e7', model: 'Moto E7 Power', brand: Brand.MOTOROLA, serviceName: 'Pattern Reset', price: 250, status: Status.AVAILABLE },

  // ================= GOOGLE PIXEL =================
  { id: 'pix-8', model: 'Google Pixel 8', brand: Brand.GOOGLE, serviceName: 'MDM Bypass', price: 1200, status: Status.AVAILABLE },
  { id: 'pix-6', model: 'Google Pixel 6', brand: Brand.GOOGLE, serviceName: 'Flashing', price: 800, status: Status.AVAILABLE },
  { id: 'pix-3', model: 'Google Pixel 3 XL', brand: Brand.GOOGLE, serviceName: 'FRP Unlock', price: 500, status: Status.AVAILABLE },

  // ================= NOTHING =================
  { id: 'not-2', model: 'Nothing Phone (2)', brand: Brand.NOTHING, serviceName: 'Relock Bootloader', price: 800, status: Status.AVAILABLE },
  { id: 'not-1', model: 'Nothing Phone (1)', brand: Brand.NOTHING, serviceName: 'EDL Unbrick', price: 1000, status: Status.DELAYED },

  // ================= ASUS =================
  { id: 'asus-rog6', model: 'Asus ROG Phone 6', brand: Brand.ASUS, serviceName: 'Dead Boot Repair', price: 2500, status: Status.SERVER_DOWN },
  { id: 'asus-z8', model: 'Asus Zenfone 8', brand: Brand.ASUS, serviceName: 'Ramdump Fix', price: 1500, status: Status.AVAILABLE },
  { id: 'asus-m1', model: 'Asus Zenfone Max Pro M1', brand: Brand.ASUS, serviceName: 'Flashing', price: 300, status: Status.AVAILABLE },

  // ================= HONOR =================
  { id: 'hon-90', model: 'Honor 90', brand: Brand.HONOR, serviceName: 'FRP / ID Remove', price: 1200, status: Status.AVAILABLE },
  { id: 'hon-x9b', model: 'Honor X9b', brand: Brand.HONOR, serviceName: 'Screen Lock', price: 800, status: Status.AVAILABLE },
  { id: 'hon-9x', model: 'Honor 9X', brand: Brand.HONOR, serviceName: 'Google Services Fix', price: 400, status: Status.AVAILABLE },

  // ================= INFINIX / TECNO / ITEL / LAVA =================
  { id: 'inf-note12', model: 'Infinix Note 12', brand: Brand.INFINIX, serviceName: 'MDM Remove', price: 1000, status: Status.AVAILABLE },
  { id: 'tec-spark', model: 'Tecno Spark Go', brand: Brand.TECNO, serviceName: 'FRP Unlock', price: 250, status: Status.AVAILABLE },
  { id: 'itel-s23', model: 'Itel S23', brand: Brand.ITEL, serviceName: 'Pattern Reset', price: 200, status: Status.AVAILABLE },
  { id: 'itel-a48', model: 'Itel A48', brand: Brand.ITEL, serviceName: 'Flashing', price: 200, status: Status.AVAILABLE },
  { id: 'lava-ag5', model: 'Lava Agni 2', brand: Brand.LAVA, serviceName: 'FRP Unlock', price: 300, status: Status.AVAILABLE },
  { id: 'lava-yuva', model: 'Lava Yuva 2 Pro', brand: Brand.LAVA, serviceName: 'Screen Lock', price: 250, status: Status.AVAILABLE },
];