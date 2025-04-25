import cleaning from './cleaning.jpeg'
import electric from './electrician.jpeg'
import painter from './painter.jpeg'
import plumber from './plumber.jpeg'
import carpenter from './carpenter.jpeg'
import shifting from './shifting.jpeg'


const alldata=[
    {
        id:1,
        title:"House Cleaning",
        category:"Cleaning",
        person:"Suraj",
        image:cleaning,
        contact:"6345789290",
        area:"Periyasemur",
        charge:'200',
        day:2,
        city:"Erode",
        description:`<h3 className='mt-2 text-2xl font-bold'>House Cleaner</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Professional House Cleaner</li>
          <li className='text-xl mt-5'>Performed dusting, sweeping, mopping, and vacuuming in residential homes.</li>
          <li className='text-xl mt-5'>Cleaned and sanitized kitchens, bathrooms, and living areas.</li>
          <li className='text-xl mt-5'>Followed customized cleaning plans based on client preferences.</li>
          <li className='text-xl mt-5'>Maintained high standards of cleanliness and customer satisfaction.</li>
          <li className='text-xl mt-5'>Used eco-friendly cleaning products when requested.</li>
        </ul>
      `,
      experience:`<li>Delivered scheduled cleaning services for over 100 households.</li>
          <li>Deep cleaned carpets, upholstery, and curtains using professional-grade equipment.</li>
          <li>Managed time efficiently to complete multiple home visits per day.</li>
          <li>Restocked cleaning supplies and maintained inventory records.</li>
          <li>Communicated directly with clients to address special requests and feedback.</li>
          <li>Specialized in post-renovation and move-in/move-out cleaning services.</li>`
        },    {
        id:2,
        title:"Electrician",
        category:"Electric",
        person:"Sundar",
        image:electric,
        contact:"6345789290",
        area:"Veerappan Chathiram",
        charge:'250',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Electrician</h3>
        <ul>
          <li className='text-xl mt-5'>Installed, maintained, and repaired electrical systems in homes and small businesses.</li>
          <li className='text-xl mt-5'>Handled wiring for new constructions and panel upgrades.</li>
          <li className='text-xl mt-5'>Repaired faulty electrical connections and installed lighting fixtures.</li>
          <li className='text-xl mt-5'>Ensured all work complied with safety codes and local regulations.</li>
          <li className='text-xl mt-5'>Used diagnostic tools like multimeters and voltage testers to troubleshoot issues.</li>
        </ul>
      `,
      experience:`<li>Installed complete wiring systems in newly constructed homes and office spaces.</li>
      <li>Performed electrical inspections and upgrades to meet energy efficiency standards.</li>
      <li>Repaired short circuits, power outages, and faulty electrical components.</li>
      <li>Installed smart home systems including lighting, security, and HVAC control panels.</li>
      <li>Maintained detailed reports of electrical work and submitted compliance documentation.</li>
      <li>Trained junior electricians and apprentices on safety protocols and tools usage.</li>`},    {
        id:3,
        title:"Plumber",
        category:"Plumbing",
        person:"Akash",
        image:plumber,
        contact:"6345789890",
        area:"Bhavani",
        charge:'200',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Plumber</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Certified Plumber</li>
          <li className='text-xl mt-5 '>Installed and repaired water supply and drainage systems.</li>
          <li className='text-xl mt-5 '>Specialized in leak detection, drain unclogging, and fixture installation.</li>
          <li className='text-xl mt-5 '>Worked with water heaters, toilets, sinks, and pipelines.</li>
          <li className='text-xl mt-5 '>Read blueprints and adhered to building codes for accurate work.</li>
        </ul>
      `,
      experience:`<li>Installed water pipelines, sewage systems, and heating units in residential projects.</li>
          <li>Handled emergency plumbing situations like burst pipes and flooded basements.</li>
          <li>Performed preventive maintenance for large apartment complexes.</li>
          <li>Used pipe cutters, soldering torches, and pressure gauges to ensure durable fittings.</li>
          <li>Collaborated with contractors during new building projects and remodeling.</li>
          <li>Maintained updated knowledge of plumbing codes and safety regulations.</li>`},    {
        id:4,
        title:"Carpenter",
        category:"Carpentering",
        person:"Santhosh",
        image:carpenter,
        contact:"6345784567",
        area:"Solar",
        charge:'300',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Carpenter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential Carpenter</li>
          <li className='text-xl mt-5 '>Built and repaired doors, cabinets, staircases, and partitions.</li>
          <li className='text-xl mt-5 '>Worked with wood, plywood, and other materials using hand and power tools.</li>
          <li className='text-xl mt-5 '>Read and interpreted blueprints and technical drawings.</li>
          <li className='text-xl mt-5 '>Delivered customized furniture with attention to detail and quality.</li>
        </ul>
      `,
      experience:`
      <li>Designed and fabricated custom furniture pieces based on client needs.</li>
          <li>Restored antique furniture and provided polish, lacquer, and refinishing services.</li>
          <li>Built modular kitchens, wardrobes, and entertainment units from scratch.</li>
          <li>Collaborated with interior designers and architects for premium housing projects.</li>
          <li>Worked with hardwood, plywood, and MDF using precision cutting tools.</li>
          <li>Maintained workshop tools, ensured safety compliance, and followed deadlines strictly.</li>`},    {
        id:5,
        title:"Painter",
        category:"Painting",
        person:"Rajan",
        image:painter,
        contact:"6345785678",
        area:"Gobi",
        charge:'300',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Painter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Interior & Exterior Painter</li>
          <li className='text-xl mt-5 '>Prepared surfaces by sanding, scraping, and priming.</li>
          <li className='text-xl mt-5 '>Mixed and applied various types of paint finishes.</li>
          <li className='text-xl mt-5 '>Worked on residential and commercial properties.</li>
          <li className='text-xl mt-5 '>Protected non-painted surfaces and ensured clean workspaces.</li>
        </ul>
      `,
      experience:`
      <li>Painted walls, ceilings, fences, gates, and decorative fixtures with precision.</li>
      <li>Used brushes, rollers, and spray equipment to apply finishes on various surfaces.</li>
      <li>Suggested color combinations and finishes based on client preferences.</li>
      <li>Worked on both small residential and large-scale commercial painting projects.</li>
      <li>Handled surface imperfections such as cracks, holes, and dampness before painting.</li>
      <li>Ensured all job sites were cleaned after project completion.</li>`},    {
        id:6,
        title:"Shifting",
        category:"driving",
        person:"Suresh",
        image:shifting,
        contact:"6345789291",
        area:"Sathy",
        charge:'250',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>House Shifter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Household Moving Assistant</li>
          <li className='text-xl mt-5 '>Packed, loaded, transported, and unloaded household items safely.</li>
          <li className='text-xl mt-5 '>Used proper lifting techniques and handled fragile goods with care.</li>
          <li className='text-xl mt-5 '>Maintained inventory logs and ensured timely delivery.</li>
          <li className='text-xl mt-5 '>Communicated with clients for smooth moving experience.</li>
        </ul>
      `,
      experience:`
      <li>Coordinated and executed house shifting for over 200 families.</li>
          <li>Skilled in disassembling and reassembling furniture safely.</li>
          <li>Managed team logistics, truck loading, and route optimization for transport.</li>
          <li>Provided packaging services with protective wraps, labels, and boxes.</li>
          <li>Handled customer documentation for intercity moves and long-distance shifting.</li>
          <li>Maintained a damage-free track record with customer satisfaction ratings above 95%.</li>`},
    {
        id:7,
        title:"House Cleaning",
        category:"Cleaning",
        person:"Sundara",
        image:cleaning,
        contact:"6345789290",
        area:"Sathy",
        charge:'250',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>House Cleaner</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Professional House Cleaner</li>
          <li className='text-xl mt-5 '>Performed dusting, sweeping, mopping, and vacuuming in residential homes.</li>
          <li className='text-xl mt-5 '>Cleaned and sanitized kitchens, bathrooms, and living areas.</li>
          <li className='text-xl mt-5 '>Followed customized cleaning plans based on client preferences.</li>
          <li className='text-xl mt-5 '>Maintained high standards of cleanliness and customer satisfaction.</li>
          <li className='text-xl mt-5 '>Used eco-friendly cleaning products when requested.</li>
        </ul>
      `,
      experience:`<li>Delivered scheduled cleaning services for over 100 households.</li>
      <li>Deep cleaned carpets, upholstery, and curtains using professional-grade equipment.</li>
      <li>Managed time efficiently to complete multiple home visits per day.</li>
      <li>Restocked cleaning supplies and maintained inventory records.</li>
      <li>Communicated directly with clients to address special requests and feedback.</li>
      <li>Specialized in post-renovation and move-in/move-out cleaning services.</li>` },
    {
        id:8,
        title:"Electrician",
        category:"Electric",
        person:"Ragavan",
        image:electric,
        contact:"6345789290",
        area:"Gobi",
        charge:'300',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Electrician</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential & Commercial Electrician</li>
          <li className='text-xl mt-5 '>Installed, maintained, and repaired electrical systems in homes and small businesses.</li>
          <li className='text-xl mt-5 '>Handled wiring for new constructions and panel upgrades.</li>
          <li className='text-xl mt-5 '>Repaired faulty electrical connections and installed lighting fixtures.</li>
          <li className='text-xl mt-5 '>Ensured all work complied with safety codes and local regulations.</li>
          <li className='text-xl mt-5 '>Used diagnostic tools like multimeters and voltage testers to troubleshoot issues.</li>
        </ul>
      `,
      experience:`<li>Installed complete wiring systems in newly constructed homes and office spaces.</li>
          <li>Performed electrical inspections and upgrades to meet energy efficiency standards.</li>
          <li>Repaired short circuits, power outages, and faulty electrical components.</li>
          <li>Installed smart home systems including lighting, security, and HVAC control panels.</li>
          <li>Maintained detailed reports of electrical work and submitted compliance documentation.</li>
          <li>Trained junior electricians and apprentices on safety protocols and tools usage.</li>`
    }, {
        id:9,
        title:"Plumber",
        category:"Plumbing",
        person:"Sathish",
        image:plumber,
        contact:"6345789890",
        area:"Solar",
        charge:'350',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Plumber</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Certified Plumber</li>
          <li className='text-xl mt-5 '>Installed and repaired water supply and drainage systems.</li>
          <li className='text-xl mt-5 '>Specialized in leak detection, drain unclogging, and fixture installation.</li>
          <li className='text-xl mt-5 '>Worked with water heaters, toilets, sinks, and pipelines.</li>
          <li className='text-xl mt-5 '>Read blueprints and adhered to building codes for accurate work.</li>
        </ul>
      `,
      experience:`<li>Installed water pipelines, sewage systems, and heating units in residential projects.</li>
      <li>Handled emergency plumbing situations like burst pipes and flooded basements.</li>
      <li>Performed preventive maintenance for large apartment complexes.</li>
      <li>Used pipe cutters, soldering torches, and pressure gauges to ensure durable fittings.</li>
      <li>Collaborated with contractors during new building projects and remodeling.</li>
      <li>Maintained updated knowledge of plumbing codes and safety regulations.</li>`},   {
        id:10,
        title:"Painter",
        category:"Painting",
        person:"Jogesh",
        image:painter,
        contact:"6345785678",
        area:"Bhavani",
        charge:'250',
        day:2,
        city:"Erode",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Painter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Interior & Exterior Painter</li>
          <li className='text-xl mt-5 '>Prepared surfaces by sanding, scraping, and priming.</li>
          <li className='text-xl mt-5 '>Mixed and applied various types of paint finishes.</li>
          <li className='text-xl mt-5 '>Worked on residential and commercial properties.</li>
          <li className='text-xl mt-5 '>Protected non-painted surfaces and ensured clean workspaces.</li>
        </ul>
      ` ,
      experience:`<li><strong>Job Title:</strong> Interior & Exterior Painter</li>
      <li>Painted walls, ceilings, fences, gates, and decorative fixtures with precision.</li>
      <li>Used brushes, rollers, and spray equipment to apply finishes on various surfaces.</li>
      <li>Suggested color combinations and finishes based on client preferences.</li>
      <li>Worked on both small residential and large-scale commercial painting projects.</li>
      <li>Handled surface imperfections such as cracks, holes, and dampness before painting.</li>
      <li>Ensured all job sites were cleaned after project completion.</li>`},{
        id:11,
        title:"Carpenter",
        category:"Carpentering",
        person:"Subramani",
        image:carpenter,
        contact:"6345784567",
        area:"Veerappan chathiram",
        charge:'200',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Carpenter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential Carpenter</li>
          <li className='text-xl mt-5 '>Built and repaired doors, cabinets, staircases, and partitions.</li>
          <li className='text-xl mt-5 '>Worked with wood, plywood, and other materials using hand and power tools.</li>
          <li className='text-xl mt-5 '>Read and interpreted blueprints and technical drawings.</li>
          <li className='text-xl mt-5 '>Delivered customized furniture with attention to detail and quality.</li>
        </ul>
      `,
      experience:`
      <li>Designed and fabricated custom furniture pieces based on client needs.</li>
          <li>Restored antique furniture and provided polish, lacquer, and refinishing services.</li>
          <li>Built modular kitchens, wardrobes, and entertainment units from scratch.</li>
          <li>Collaborated with interior designers and architects for premium housing projects.</li>
          <li>Worked with hardwood, plywood, and MDF using precision cutting tools.</li>
          <li>Maintained workshop tools, ensured safety compliance, and followed deadlines strictly.</li>`}, {
        id:12,
        title:"Shifting",
        category:"driving",
        person:"Rajesh",
        image:shifting,
        contact:"6345789291",
        area:"Periyasemur",
        charge:'300',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>House Shifter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Household Moving Assistant</li>
          <li className='text-xl mt-5 '>Packed, loaded, transported, and unloaded household items safely.</li>
          <li className='text-xl mt-5 '>Used proper lifting techniques and handled fragile goods with care.</li>
          <li className='text-xl mt-5 '>Maintained inventory logs and ensured timely delivery.</li>
          <li className='text-xl mt-5 '>Communicated with clients for smooth moving experience.</li>
        </ul>
      `,
      experience:`
      <li>Coordinated and executed house shifting for over 200 families.</li>
          <li>Skilled in disassembling and reassembling furniture safely.</li>
          <li>Managed team logistics, truck loading, and route optimization for transport.</li>
          <li>Provided packaging services with protective wraps, labels, and boxes.</li>
          <li>Handled customer documentation for intercity moves and long-distance shifting.</li>
          <li>Maintained a damage-free track record with customer satisfaction ratings above 95%.</li>`},{
        id:13,
        title:"House Cleaning",
        category:"Cleaning",
        person:"Sagar",
        image:cleaning,
        contact:"6345789290",
        area:"Peelamedu",
        charge:'300',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>House Cleaner</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Professional House Cleaner</li>
          <li className='text-xl mt-5 '>Performed dusting, sweeping, mopping, and vacuuming in residential homes.</li>
          <li className='text-xl mt-5 '>Cleaned and sanitized kitchens, bathrooms, and living areas.</li>
          <li className='text-xl mt-5 '>Followed customized cleaning plans based on client preferences.</li>
          <li className='text-xl mt-5 '>Maintained high standards of cleanliness and customer satisfaction.</li>
          <li className='text-xl mt-5 '>Used eco-friendly cleaning products when requested.</li>
        </ul>
      `,
      experience:`<li>Delivered scheduled cleaning services for over 100 households.</li>
      <li>Deep cleaned carpets, upholstery, and curtains using professional-grade equipment.</li>
      <li>Managed time efficiently to complete multiple home visits per day.</li>
      <li>Restocked cleaning supplies and maintained inventory records.</li>
      <li>Communicated directly with clients to address special requests and feedback.</li>
      <li>Specialized in post-renovation and move-in/move-out cleaning services.</li>`},    {
        id:14,
        title:"Electrician",
        category:"Electric",
        person:"Harshanth",
        image:electric,
        contact:"6345789290",
        area:"Poondy",
        charge:'250',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Electrician</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential & Commercial Electrician</li>
          <li className='text-xl mt-5 '>Installed, maintained, and repaired electrical systems in homes and small businesses.</li>
          <li className='text-xl mt-5 '>Handled wiring for new constructions and panel upgrades.</li>
          <li className='text-xl mt-5 '>Repaired faulty electrical connections and installed lighting fixtures.</li>
          <li className='text-xl mt-5 '>Ensured all work complied with safety codes and local regulations.</li>
          <li className='text-xl mt-5 '>Used diagnostic tools like multimeters and voltage testers to troubleshoot issues.</li>
        </ul>
      `,
      experience:`<li>Installed complete wiring systems in newly constructed homes and office spaces.</li>
      <li>Performed electrical inspections and upgrades to meet energy efficiency standards.</li>
      <li>Repaired short circuits, power outages, and faulty electrical components.</li>
      <li>Installed smart home systems including lighting, security, and HVAC control panels.</li>
      <li>Maintained detailed reports of electrical work and submitted compliance documentation.</li>
      <li>Trained junior electricians and apprentices on safety protocols and tools usage.</li>`},    {
        id:15,
        title:"Plumber",
        category:"Plumbing",
        person:"Kamalesh",
        image:plumber,
        contact:"6345789890",
        area:"Ukkadam",
        charge:'200',
        day:2,
        city:"Coimbatore",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Plumber</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Certified Plumber</li>
          <li className='text-xl mt-5 '>Installed and repaired water supply and drainage systems.</li>
          <li className='text-xl mt-5 '>Specialized in leak detection, drain unclogging, and fixture installation.</li>
          <li className='text-xl mt-5 '>Worked with water heaters, toilets, sinks, and pipelines.</li>
          <li className='text-xl mt-5 '>Read blueprints and adhered to building codes for accurate work.</li>
        </ul>
      `,
      experience:`<li>Installed water pipelines, sewage systems, and heating units in residential projects.</li>
      <li>Handled emergency plumbing situations like burst pipes and flooded basements.</li>
      <li>Performed preventive maintenance for large apartment complexes.</li>
      <li>Used pipe cutters, soldering torches, and pressure gauges to ensure durable fittings.</li>
      <li>Collaborated with contractors during new building projects and remodeling.</li>
      <li>Maintained updated knowledge of plumbing codes and safety regulations.</li>`},    {
        id:16,
        title:"Carpenter",
        category:"Carpentering",
        person:"Karthik",
        image:carpenter,
        contact:"6345784567",
        area:"Gandhipuram",
        charge:'300',
        day:2,
        city:"Coimbatore",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Carpenter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential Carpenter</li>
          <li className='text-xl mt-5 '>Built and repaired doors, cabinets, staircases, and partitions.</li>
          <li className='text-xl mt-5 '>Worked with wood, plywood, and other materials using hand and power tools.</li>
          <li className='text-xl mt-5 '>Read and interpreted blueprints and technical drawings.</li>
          <li className='text-xl mt-5 '>Delivered customized furniture with attention to detail and quality.</li>
        </ul>
      `,
      experience:`
      <li>Designed and fabricated custom furniture pieces based on client needs.</li>
          <li>Restored antique furniture and provided polish, lacquer, and refinishing services.</li>
          <li>Built modular kitchens, wardrobes, and entertainment units from scratch.</li>
          <li>Collaborated with interior designers and architects for premium housing projects.</li>
          <li>Worked with hardwood, plywood, and MDF using precision cutting tools.</li>
          <li>Maintained workshop tools, ensured safety compliance, and followed deadlines strictly.</li>`},    {
        id:17,
        title:"Painter",
        category:"Painting",
        person:"Joel",
        image:painter,
        contact:"6345785678",
        area:"Perur",
        charge:'350',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Painter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Interior & Exterior Painter</li>
          <li className='text-xl mt-5 '>Prepared surfaces by sanding, scraping, and priming.</li>
          <li className='text-xl mt-5 '>Mixed and applied various types of paint finishes.</li>
          <li className='text-xl mt-5 '>Worked on residential and commercial properties.</li>
          <li className='text-xl mt-5 '>Protected non-painted surfaces and ensured clean workspaces.</li>
        </ul>
      `,
      experience:`<li><strong>Job Title:</strong> Interior & Exterior Painter</li>
      <li>Painted walls, ceilings, fences, gates, and decorative fixtures with precision.</li>
      <li>Used brushes, rollers, and spray equipment to apply finishes on various surfaces.</li>
      <li>Suggested color combinations and finishes based on client preferences.</li>
      <li>Worked on both small residential and large-scale commercial painting projects.</li>
      <li>Handled surface imperfections such as cracks, holes, and dampness before painting.</li>
      <li>Ensured all job sites were cleaned after project completion.</li>`},    {
        id:18,
        title:"Shifting",
        category:"driving",
        person:"Parvez",
        image:shifting,
        contact:"6345789291",
        area:"Singaanallur",
        charge:'200',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>House Shifter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Household Moving Assistant</li>
          <li className='text-xl mt-5 '>Packed, loaded, transported, and unloaded household items safely.</li>
          <li className='text-xl mt-5 '>Used proper lifting techniques and handled fragile goods with care.</li>
          <li className='text-xl mt-5 '>Maintained inventory logs and ensured timely delivery.</li>
          <li className='text-xl mt-5 '>Communicated with clients for smooth moving experience.</li>
        </ul>
    `,
    experience:`
    <li>Coordinated and executed house shifting for over 200 families.</li>
        <li>Skilled in disassembling and reassembling furniture safely.</li>
        <li>Managed team logistics, truck loading, and route optimization for transport.</li>
        <li>Provided packaging services with protective wraps, labels, and boxes.</li>
        <li>Handled customer documentation for intercity moves and long-distance shifting.</li>
        <li>Maintained a damage-free track record with customer satisfaction ratings above 95%.</li>`},
    {
        id:19,
        title:"House Cleaning",
        category:"Cleaning",
        person:"Nikhil",
        image:cleaning,
        contact:"6345789290",
        area:"Peelamedu",
        charge:'250',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>House Cleaner</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Professional House Cleaner</li>
          <li className='text-xl mt-5 '>Performed dusting, sweeping, mopping, and vacuuming in residential homes.</li>
          <li className='text-xl mt-5 '>Cleaned and sanitized kitchens, bathrooms, and living areas.</li>
          <li className='text-xl mt-5 '>Followed customized cleaning plans based on client preferences.</li>
          <li className='text-xl mt-5 '>Maintained high standards of cleanliness and customer satisfaction.</li>
          <li className='text-xl mt-5 '>Used eco-friendly cleaning products when requested.</li>
        </ul>
      `,
      experience:`<li>Delivered scheduled cleaning services for over 100 households.</li>
      <li>Deep cleaned carpets, upholstery, and curtains using professional-grade equipment.</li>
      <li>Managed time efficiently to complete multiple home visits per day.</li>
      <li>Restocked cleaning supplies and maintained inventory records.</li>
      <li>Communicated directly with clients to address special requests and feedback.</li>
      <li>Specialized in post-renovation and move-in/move-out cleaning services.</li>`},
    {
        id:20,
        title:"Electrician",
        category:"Electric",
        person:"Guru",
        image:electric,
        contact:"6345789290",
        area:"Poondy",
        charge:'300',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Electrician</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential & Commercial Electrician</li>
          <li className='text-xl mt-5 '>Installed, maintained, and repaired electrical systems in homes and small businesses.</li>
          <li className='text-xl mt-5 '>Handled wiring for new constructions and panel upgrades.</li>
          <li className='text-xl mt-5 '>Repaired faulty electrical connections and installed lighting fixtures.</li>
          <li className='text-xl mt-5 '>Ensured all work complied with safety codes and local regulations.</li>
          <li className='text-xl mt-5 '>Used diagnostic tools like multimeters and voltage testers to troubleshoot issues.</li>
        </ul>
      `,
      experience:`<li>Installed complete wiring systems in newly constructed homes and office spaces.</li>
      <li>Performed electrical inspections and upgrades to meet energy efficiency standards.</li>
      <li>Repaired short circuits, power outages, and faulty electrical components.</li>
      <li>Installed smart home systems including lighting, security, and HVAC control panels.</li>
      <li>Maintained detailed reports of electrical work and submitted compliance documentation.</li>
      <li>Trained junior electricians and apprentices on safety protocols and tools usage.</li>`}, {
        id:21,
        title:"Plumber",
        category:"Plumbing",
        person:"Sadvik",
        image:plumber,
        contact:"6345789890",
        area:"Ukkadam",
        charge:'200',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Plumber</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Certified Plumber</li>
          <li className='text-xl mt-5 '>Installed and repaired water supply and drainage systems.</li>
          <li className='text-xl mt-5 '>Specialized in leak detection, drain unclogging, and fixture installation.</li>
          <li className='text-xl mt-5 '>Worked with water heaters, toilets, sinks, and pipelines.</li>
          <li className='text-xl mt-5 '>Read blueprints and adhered to building codes for accurate work.</li>
        </ul>
      `,
      experience:`<li>Installed water pipelines, sewage systems, and heating units in residential projects.</li>
      <li>Handled emergency plumbing situations like burst pipes and flooded basements.</li>
      <li>Performed preventive maintenance for large apartment complexes.</li>
      <li>Used pipe cutters, soldering torches, and pressure gauges to ensure durable fittings.</li>
      <li>Collaborated with contractors during new building projects and remodeling.</li>
      <li>Maintained updated knowledge of plumbing codes and safety regulations.</li>`},   {
        id:22,
        title:"Painter",
        category:"Painting",
        person:"Sarvesh",
        image:painter,
        contact:"6345785678",
        area:"Gandhipuram",
        charge:'350',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>Painter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Interior & Exterior Painter</li>
          <li className='text-xl mt-5 '>Prepared surfaces by sanding, scraping, and priming.</li>
          <li className='text-xl mt-5 '>Mixed and applied various types of paint finishes.</li>
          <li className='text-xl mt-5 '>Worked on residential and commercial properties.</li>
          <li className='text-xl mt-5 '>Protected non-painted surfaces and ensured clean workspaces.</li>
        </ul>
      `,
      experience:`<li><strong>Job Title:</strong> Interior & Exterior Painter</li>
          <li>Painted walls, ceilings, fences, gates, and decorative fixtures with precision.</li>
          <li>Used brushes, rollers, and spray equipment to apply finishes on various surfaces.</li>
          <li>Suggested color combinations and finishes based on client preferences.</li>
          <li>Worked on both small residential and large-scale commercial painting projects.</li>
          <li>Handled surface imperfections such as cracks, holes, and dampness before painting.</li>
          <li>Ensured all job sites were cleaned after project completion.</li>`},{
        id:23,
        title:"Carpenter",
        category:"Carpentering",
        person:"Subramani",
        image:carpenter,
        contact:"6345784567",
        area:"Perur",
        charge:'300',
        day:2,
        city:"Erode",
        description:` 
        <h3 className='mt-2 text-2xl font-bold'>Carpenter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Residential Carpenter</li>
          <li className='text-xl mt-5 '>Built and repaired doors, cabinets, staircases, and partitions.</li>
          <li className='text-xl mt-5 '>Worked with wood, plywood, and other materials using hand and power tools.</li>
          <li className='text-xl mt-5 '>Read and interpreted blueprints and technical drawings.</li>
          <li className='text-xl mt-5 '>Delivered customized furniture with attention to detail and quality.</li>
        </ul>
      `,
      experience:`
      <li>Designed and fabricated custom furniture pieces based on client needs.</li>
          <li>Restored antique furniture and provided polish, lacquer, and refinishing services.</li>
          <li>Built modular kitchens, wardrobes, and entertainment units from scratch.</li>
          <li>Collaborated with interior designers and architects for premium housing projects.</li>
          <li>Worked with hardwood, plywood, and MDF using precision cutting tools.</li>
          <li>Maintained workshop tools, ensured safety compliance, and followed deadlines strictly.</li>`}, {
        id:24,
        title:"Shifting",
        category:"driving",
        person:"Rajesh",
        image:shifting,
        contact:"6345789291",
        area:"Singanallur",
        charge:'200',
        day:2,
        city:"Coimbatore",
        description:`
        <h3 className='mt-2 text-2xl font-bold'>House Shifter</h3>
        <ul>
          <li className='text-xl mt-5 '><strong>Job Title:</strong> Household Moving Assistant</li>
          <li className='text-xl mt-5 '>Packed, loaded, transported, and unloaded household items safely.</li>
          <li className='text-xl mt-5 '>Used proper lifting techniques and handled fragile goods with care.</li>
          <li className='text-xl mt-5 '>Maintained inventory logs and ensured timely delivery.</li>
          <li className='text-xl mt-5 '>Communicated with clients for smooth moving experience.</li>
        </ul>
      `,
      experience:`
      <li>Coordinated and executed house shifting for over 200 families.</li>
          <li>Skilled in disassembling and reassembling furniture safely.</li>
          <li>Managed team logistics, truck loading, and route optimization for transport.</li>
          <li>Provided packaging services with protective wraps, labels, and boxes.</li>
          <li>Handled customer documentation for intercity moves and long-distance shifting.</li>
          <li>Maintained a damage-free track record with customer satisfaction ratings above 95%.</li>`}
]
export default alldata;