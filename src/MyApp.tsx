import { Card, CardHeader, Text } from "@ui5/webcomponents-react";

export function MyApp() {
    const handleHeaderClick = () => {
        alert("Header clicked");
    };
  return (
    <div>
      <Card 
        header={<CardHeader 
        titleText="Card" 
        interactive 
         onClick={handleHeaderClick}
        />
        } style={{ width: "300px" }}>
        <Text style={{ padding: "var(--sapContent_Space_S)" }}>
          This is the content area of the Card
        </Text>
      </Card>
    </div>
  );
}
