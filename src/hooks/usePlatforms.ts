import platforms from "../data/platforms";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  erorr: null,
});

export default usePlatforms;
