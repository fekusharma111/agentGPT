import { Card, CardBody } from '@nextui-org/react'
import React from 'react'

const SampleCard = ({setInput}) => {
    
    const cardetails=[
        {id:"1", content:"Launch a new fintech startup idea", icon :"🚀"},
        {id:"2", content:"Generate branding strategy for an AI art tool", icon :"🎨"},
        {id:"3", content:"Create a go-to-market plan for a SaaS product",  icon :"📈"},
        {id:"4", content:"Design a multi-agent chatbot architecture",  icon :"🤖"}
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {cardetails.map((ca) => (
            <Card
              key={ca.id}
              isPressable
              className="dark hover:bg-[#2c2c2c] transition-all"
              style={{background:"#27272A"}}
              onPress={() => setInput && setInput(ca.content)}
            >
              <CardBody>
                <p>{ca.icon}{" "}{ca.content}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      );
    
  
}

export default SampleCard