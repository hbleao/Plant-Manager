type EnvironmentProps = {
  key: string;
  title: string;
};

type PlantProps = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
};

export { 
  EnvironmentProps, 
  PlantProps 
};