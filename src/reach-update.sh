for IMG in reach reach-cli runner rpc-server react-runner devnet-algo devnet-eth; do
  for TAG in latest '0' '0.1' '0.1.13' ; do
    docker pull "reachsh/${IMG}:${TAG}"
  done
done