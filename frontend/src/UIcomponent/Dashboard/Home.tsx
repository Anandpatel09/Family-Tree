

import { useEffect, useState } from "react";
import HomeCards from "./HomeCards";
import HomeNavbar from "./HomeNavbar";
import Hometable from "./Hometable";
import { familyData } from "@/api";

export interface FamilyData{
  
newThisMonth?:number,
totalFamilies?:number,
totalMembers?:number
}

const Home = () => {
const [famData, setFamData] = useState<FamilyData | null>(null);

useEffect(()=>{
const datado=async()=>{

  const result=await familyData();
  setFamData(result.data);  
}
datado();
},[])

  console.log("nv sv v v f vfv fv===========",famData)

  return (
    <div className="min-h-screen flex flex-col">
      <HomeNavbar />
      <main className="flex items-center justify-center p-6">
      <h1 className="font-bold text-2xl">Welcome to the village Directory </h1>
        
      </main>
      {famData && <HomeCards familyData={famData}/>}
      <Hometable/>
    </div>
  );
};

export default Home;