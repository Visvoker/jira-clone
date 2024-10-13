import { Button } from "@/components/ui/button";
import { TestComponent } from "@/features/test";


export default function Home() {
  return (
    <div>
      <div>
        <TestComponent />
      </div>
      <Button>
        Click me
      </Button>
    </div>
  );
}
