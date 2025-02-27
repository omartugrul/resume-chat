import { Card } from "@ui/card";
import { Textarea } from "@ui/textarea";
import { Button } from "@ui/button";




export default function ChatLayout() {
  return (
    <div className="flex h-screen">
      {/* Left - Resume Preview */}
      <Card className="w-1/3 h-full p-4">Resume Preview</Card>

      {/* Right - Chat Interface */}
      <div className="w-2/3 h-full flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">Chat Messages...</div>
        <div className="p-4 border-t flex gap-2">
          <Textarea className="flex-1" placeholder="Type your message..." />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}

