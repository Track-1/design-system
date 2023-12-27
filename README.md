# Track-1-Design-system

Track-1의 디자인 시스템 라이브러리

## Features

- **Cover**: 앨범 커버 디자인
- **BottomSheet**: 바텀시트
- **Button**: 각종 버튼
- **CheckBox**: 체크박스

## Installation

```bash
yarn add track-1-design-system
```

## Usage

1. Cover

   ```js
   // props
   interface CoverProps {
     imageUrl: string;
     shape: "circle" | "rectangle" | "window";
     width: number;
     height: number;
     align?: "center" | "rightBottom";
     isPlay?: boolean;
     isBlur?: boolean;
     onPlay?: () => void;
   }
   ```

   ```js
   const [isPlay, setIsplay] = useState(false);

   function onPlay() {
     setIsplay((prev) => !prev);
   }

   return <Cover imageUrl="url" shape="circle" width={12} height={12} isPlay={isPlay} onPlay={onPlay} />;
   ```

2. BottomSheet

   ```js
   //props
   export interface BottomSheetProps extends PropsWithChildren<ComponentProps<typeof Sheet>> {
     header?: ReactNode;
     onClose: () => void;
   }
   ```

   ```js
   const [isOpen, setIsOpen] = useState(false);
   function onClose() {
     setIsOpen(false);
   }

   function onOpen() {
     setIsOpen(true);
   }

   return (
     <>
       <button type="button" onClick={onOpen}>
         클릭하여 바텀시트 열기
       </button>
       <BottomSheet isOpen={isOpen} onClose={onClose} header="Category">
         <>바텀시트</>
       </BottomSheet>
     </>
   );
   ```

3. Button

   ```js
   //props
   interface ButtonProps {
     children: ReactNode;
     size?: "small" | "middle" | "large";
     type?: "free" | "bottom";
     backgroundColor?: "purple" | "pink" | "green" | "grey";
     color?: "white" | "black" | "grey";
     disabled?: boolean;
     onClick?: () => void;
   }
   ```

   ```js
   <Button size="small" type="free" backgroundColor="purple" color="white" disable>
     button
   </Button>
   ```

4. CheckBox

   ```js
   // props
   export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
     checked?: boolean;
   }
   ```

   ```js
   const [checked, onChange] = useState < boolean > false;
   return <CheckBox checked={checked} onChange={(e) => onChange(e.target.checked)} />;
   ```
