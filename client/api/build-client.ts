import axios from "axios";

export default ({ req }: { req: any}) => {
  if(typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://localhost:3001',
      // baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    return axios.create();
  }
}